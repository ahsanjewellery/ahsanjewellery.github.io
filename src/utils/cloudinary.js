export async function uploadImage(file) {
  if (!file) {
    throw new Error("No image selected.");
  }

  if (!file.type.startsWith("image/")) {
    throw new Error("Please select a valid image file.");
  }

  // Limit size to 10MB
  if (file.size > 10 * 1024 * 1024) {
    throw new Error("Image size must be less than 10MB.");
  }

  const data = new FormData();
  data.append("file", file);
  // Yahan exact wahi naam hai jo aapke Cloudinary dashboard par hai
  data.append("upload_preset", "jewellery_preset"); 

  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dnwcqj1j/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();

    if (!res.ok || !result.secure_url) {
      console.error("Cloudinary Detailed Error Response:", result);
      throw new Error(
        result?.error?.message || "Cloudinary image upload failed due to server error."
      );
    }

    return result.secure_url;
  } catch (error) {
    console.error("Network or Upload Exception:", error);
    throw error;
  }
}