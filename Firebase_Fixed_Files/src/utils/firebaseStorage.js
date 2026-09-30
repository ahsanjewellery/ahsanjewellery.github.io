import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

const IMAGE_EXTENSIONS = [
  ".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp",
  ".tif", ".tiff", ".svg", ".avif", ".ico", ".heic", ".heif",
];

export const isSupportedImage = (file) => {
  if (!file) return false;
  const type = String(file.type || "").toLowerCase();
  const name = String(file.name || "").toLowerCase();
  return type.startsWith("image/") || IMAGE_EXTENSIONS.some((ext) => name.endsWith(ext));
};

const getExtension = (name = "") => {
  const match = name.toLowerCase().match(/\.[^.]+$/);
  return match ? match[0] : "";
};

const shouldKeepOriginal = (file) => {
  const type = String(file.type || "").toLowerCase();
  const ext = getExtension(file.name);
  return [
    "image/gif", "image/svg+xml", "image/heic", "image/heif",
  ].includes(type) || [".gif", ".svg", ".heic", ".heif"].includes(ext);
};

const compressImage = (file, maxWidth = 1400, maxHeight = 1400, targetBytes = 900 * 1024) => {
  return new Promise((resolve) => {
    if (!file || !isSupportedImage(file) || shouldKeepOriginal(file)) {
      resolve(file);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    const img = new Image();

    img.onload = async () => {
      try {
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;
        if (!width || !height) {
          URL.revokeObjectURL(objectUrl);
          resolve(file);
          return;
        }

        const scale = Math.min(1, maxWidth / width, maxHeight / height);
        width = Math.max(1, Math.round(width * scale));
        height = Math.max(1, Math.round(height * scale));

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) {
          URL.revokeObjectURL(objectUrl);
          resolve(file);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);

        const originalType = String(file.type || "").toLowerCase();
        const outputType = originalType === "image/jpeg" || originalType === "image/jpg"
          ? "image/jpeg"
          : "image/webp";

        let quality = 0.82;
        let blob = await new Promise((res) => canvas.toBlob(res, outputType, quality));

        for (let i = 0; i < 4 && blob && blob.size > targetBytes; i += 1) {
          quality -= 0.12;
          blob = await new Promise((res) => canvas.toBlob(res, outputType, Math.max(0.35, quality)));
        }

        if (!blob || blob.size > targetBytes) {
          const smallerCanvas = document.createElement("canvas");
          smallerCanvas.width = Math.max(1, Math.round(width * 0.75));
          smallerCanvas.height = Math.max(1, Math.round(height * 0.75));
          const smallerCtx = smallerCanvas.getContext("2d", { alpha: true });
          smallerCtx.drawImage(canvas, 0, 0, smallerCanvas.width, smallerCanvas.height);
          blob = await new Promise((res) => smallerCanvas.toBlob(res, outputType, 0.65));
        }

        URL.revokeObjectURL(objectUrl);

        if (!blob) {
          resolve(file);
          return;
        }

        const baseName = String(file.name || "image").replace(/\.[^.]+$/, "");
        const outputExt = outputType === "image/jpeg" ? ".jpg" : ".webp";
        resolve(new File([blob], `${baseName}${outputExt}`, {
          type: outputType,
          lastModified: Date.now(),
        }));
      } catch (error) {
        console.warn("Image compression failed; original will be uploaded.", error);
        URL.revokeObjectURL(objectUrl);
        resolve(file);
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(file);
    };

    img.src = objectUrl;
  });
};

export const uploadImage = async (file, folder = "store-images") => {
  if (!isSupportedImage(file)) {
    throw new Error("Please select a valid image file.");
  }

  const preparedFile = await compressImage(file);
  const safeName = String(preparedFile.name || "image")
    .replace(/[^a-zA-Z0-9._-]/g, "-");
  const uniqueName = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}-${safeName}`;
  const imageRef = ref(storage, `${folder}/${uniqueName}`);

  await uploadBytes(imageRef, preparedFile, {
    contentType: preparedFile.type || "application/octet-stream",
    cacheControl: "public,max-age=31536000,immutable",
  });

  return getDownloadURL(imageRef);
};
