import React, { useEffect, useRef, useState } from "react";
import { isSupportedImage, uploadImage } from "../utils/firebaseStorage";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

// Image validation and Firebase Storage upload are handled in ../utils/firebaseStorage

function ProductForm() {
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef(null);

  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    originalPrice: "",
    price: "",
    discountPercent: "",
    category: "",
    description: "",
    featured: false,
  });

  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState("");
  const [categoryImagePreview, setCategoryImagePreview] = useState("");
  const [categoryImageLoading, setCategoryImageLoading] = useState(false);
  const [editingCategoryId, setEditingCategoryId] = useState(null);

  const categoryFileInputRef = useRef(null);

  const [variants, setVariants] = useState([
    {
      imageFile: "",
      imagePreview: "",
      uploading: false,
    },
  ]);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      setCategoriesLoading(true);
      const snapshot = await getDocs(collection(db, "categories"));
      const catList = snapshot.docs.map((categoryDoc) => ({
        id: categoryDoc.id,
        ...categoryDoc.data(),
      }));
      setCategories(catList);
      if (catList.length > 0) {
        setFormData((prev) => ({
          ...prev,
          category: prev.category || catList[0].name,
        }));
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setCategoriesLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const snapshot = await getDocs(collection(db, "products"));
      const prodList = snapshot.docs.map((productDoc) => ({
        id: productDoc.id,
        ...productDoc.data(),
      }));
      setProducts(prodList);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const resetProductForm = () => {
    setEditingId(null);
    setFormData({
      name: "",
      sku: "",
      originalPrice: "",
      price: "",
      discountPercent: "",
      category: categories.length > 0 ? categories[0].name : "",
      description: "",
      featured: false,
    });
    setImageUrl("");
    setVariants([
      {
        imageFile: "",
        imagePreview: "",
        uploading: false,
      },
    ]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const resetCategoryForm = () => {
    setEditingCategoryId(null);
    setCategoryName("");
    setCategoryImage("");
    setCategoryImagePreview("");
    if (categoryFileInputRef.current) categoryFileInputRef.current.value = "";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      if (name === "price" || name === "originalPrice") {
        const original = parseFloat(updated.originalPrice) || 0;
        const selling = parseFloat(updated.price) || 0;
        if (original > 0 && selling > 0 && original > selling) {
          const discount = Math.round(((original - selling) / original) * 100);
          updated.discountPercent = discount.toString();
        } else {
          updated.discountPercent = "";
        }
      }
      return updated;
    });
  };

  const handleImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageLoading(true);
    try {
      if (!isSupportedImage(file)) {
        throw new Error("Please select a valid image file.");
      }
      const url = await uploadImage(file, "product-images");
      if (url) setImageUrl(url);
    } catch (error) {
      console.error("Failed to upload image:", error);
      alert("Image upload mein error aaya hai.");
    } finally {
      setImageLoading(false);
    }
  };

  const handleCategoryImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setCategoryImageLoading(true);
    try {
      if (!isSupportedImage(file)) {
        throw new Error("Please select a valid image file.");
      }
      const url = await uploadImage(file, "category-images");
      if (url) {
        setCategoryImage(url);
        setCategoryImagePreview(URL.createObjectURL(file));
      }
    } catch (error) {
      console.error("Failed to upload category image:", error);
      alert("Category image upload karne mein masla aaya hai.");
    } finally {
      setCategoryImageLoading(false);
    }
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    if (!categoryName.trim()) return;

    try {
      setCategoryImageLoading(true);
      const categoryPayload = {
        name: categoryName.trim(),
        image: categoryImage || "",
      };

      if (editingCategoryId) {
        await updateDoc(doc(db, "categories", editingCategoryId), categoryPayload);
        alert("Category update ho gayi!");
      } else {
        await addDoc(collection(db, "categories"), categoryPayload);
        alert("Category add ho gayi!");
      }
      resetCategoryForm();
      await fetchCategories();
    } catch (error) {
      console.error("Error saving category:", error);
    } finally {
      setCategoryImageLoading(false);
    }
  };

  const handleCategoryDelete = async (id) => {
    if (!window.confirm("Kya aap category delete karna chahte hain?")) return;
    try {
      await deleteDoc(doc(db, "categories", id));
      await fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.price || !imageUrl) {
      alert("Kripya saari zaroori fields aur main image bharein.");
      return;
    }

    try {
      setLoading(true);
      const formattedVariants = variants
        .filter((v) => v.imageFile)
        .map((v) => ({ image: v.imageFile }));

      const productPayload = {
        name: formData.name.trim(),
        sku: formData.sku.trim(),
        originalPrice: formData.originalPrice ? Number(formData.originalPrice) : null,
        price: Number(formData.price) || 0,
        discountPercent: formData.discountPercent ? Number(formData.discountPercent) : null,
        category: formData.category.trim(),
        description: formData.description || "",
        variants: formattedVariants,
        featured: Boolean(formData.featured),
        image: imageUrl,
        updatedAt: new Date(),
      };

      if (editingId) {
        await updateDoc(doc(db, "products", editingId), productPayload);
        alert("Product update ho gaya!");
      } else {
        await addDoc(collection(db, "products"), { ...productPayload, createdAt: new Date() });
        alert("Product add ho gaya!");
      }

      resetProductForm();
      await fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name || "",
      sku: product.sku || "",
      originalPrice: product.originalPrice ?? "",
      price: product.price ?? "",
      discountPercent: product.discountPercent ?? "",
      category: product.category || "",
      description: product.description || "",
      featured: Boolean(product.featured),
    });
    setImageUrl(product.image || "");
    if (Array.isArray(product.variants) && product.variants.length > 0) {
      setVariants(
        product.variants.map((v) => ({
          imageFile: v.image || "",
          imagePreview: v.image || "",
          uploading: false,
        }))
      );
    } else {
      setVariants([{ imageFile: "", imagePreview: "", uploading: false }]);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Product delete karein?")) return;
    try {
      await deleteDoc(doc(db, "products", id));
      await fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="space-y-8 font-sans pb-12">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Store Management</h1>
      </div>

      {/* Category Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold mb-4">{editingCategoryId ? "Edit Category" : "Add Category"}</h2>
        <form onSubmit={handleCategorySubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full p-3 bg-gray-50 border rounded-xl text-xs"
            required
          />
          <div className="flex items-center gap-4">
            <input
              ref={categoryFileInputRef}
              type="file"
              accept="image/*,.jpg,.jpeg,.png,.webp,.gif,.bmp,.tif,.tiff,.svg,.avif,.ico,.heic,.heif"
              onChange={handleCategoryImage}
              className="text-xs"
            />
            {categoryImageLoading && <span className="text-xs text-blue-600">Compressing & Uploading...</span>}
            {categoryImagePreview && (
              <img src={categoryImagePreview} alt="Category Preview" className="w-12 h-12 object-cover rounded border" />
            )}
          </div>
          <button type="submit" disabled={categoryImageLoading} className="px-4 py-2 bg-black text-white text-xs rounded-xl">
            {editingCategoryId ? "Update Category" : "Add Category"}
          </button>
        </form>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {categories.map((cat) => (
            <div key={cat.id} className="p-3 bg-gray-50 rounded-xl flex items-center justify-between border">
              <div className="flex items-center gap-2">
                {cat.image && <img src={cat.image} alt={cat.name} className="w-8 h-8 object-cover rounded" />}
                <span className="text-xs font-bold">{cat.name}</span>
              </div>
              <button onClick={() => handleCategoryDelete(cat.id)} className="text-xs text-red-600">Delete</button>
            </div>
          ))}
        </div>
      </div>

      {/* Product Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold mb-4">{editingId ? "Edit Product" : "Add Product"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-4">
            <input ref={fileInputRef} type="file" accept="image/*,.jpg,.jpeg,.png,.webp,.gif,.bmp,.tif,.tiff,.svg,.avif,.ico,.heic,.heif" onChange={handleImage} className="text-xs" />
            {imageLoading && <span className="text-xs text-blue-600">Compressing & Uploading Main Image...</span>}
            {imageUrl && <img src={imageUrl} alt="preview" className="w-12 h-12 object-cover rounded border" />}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 bg-gray-50 border rounded-xl text-xs"
              required
            />
            <input
              type="text"
              name="sku"
              placeholder="SKU Code"
              value={formData.sku}
              onChange={handleChange}
              className="p-3 bg-gray-50 border rounded-xl text-xs"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="number"
              name="originalPrice"
              placeholder="Original Price"
              value={formData.originalPrice}
              onChange={handleChange}
              className="p-3 bg-gray-50 border rounded-xl text-xs"
            />
            <input
              type="number"
              name="price"
              placeholder="Selling Price"
              value={formData.price}
              onChange={handleChange}
              className="p-3 bg-gray-50 border rounded-xl text-xs"
              required
            />
            <input
              type="number"
              name="discountPercent"
              placeholder="Discount %"
              value={formData.discountPercent}
              onChange={handleChange}
              className="p-3 bg-gray-100 border rounded-xl text-xs text-emerald-600 font-bold"
              readOnly
            />
          </div>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 bg-gray-50 border rounded-xl text-xs"
            required
          >
            <option value="">Select Category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>{c.name}</option>
            ))}
          </select>

          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 bg-gray-50 border rounded-xl text-xs"
          />

          <button type="submit" disabled={loading} className="px-6 py-3 bg-black text-white text-xs rounded-xl">
            {loading ? "Processing..." : editingId ? "Update Product" : "Publish Product"}
          </button>
        </form>
      </div>

      {/* Product List */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold mb-4">All Products</h2>
        <div className="space-y-3">
          {products.map((p) => (
            <div key={p.id} className="p-3 bg-gray-50 rounded-xl flex items-center justify-between border">
              <div className="flex items-center gap-3">
                <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded" />
                <div>
                  <h4 className="text-xs font-bold">{p.name}</h4>
                  <p className="text-[10px] text-gray-500">Rs. {p.price}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(p)} className="text-xs text-blue-600">Edit</button>
                <button onClick={() => handleDelete(p.id)} className="text-xs text-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductForm;