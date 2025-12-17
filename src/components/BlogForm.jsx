import React from 'react'
import { useEffect, useState } from "react";

const categories = ["Technology","Health","Finance","Travel","Food","Lifestyle","Other",];

const statuses = ["Draft", "Published"];

function BlogForm({ initialData = {}, onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    author: "",
    status: "Draft",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData?.title) {
      setForm(initialData);
      setImagePreview(initialData.image || null);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      setError("Only JPG or PNG images are allowed");
      return;
    }

    if (file.size > 1024 * 1024) {
      setError("Image size must be less than 1MB");
      return;
    }

    setError("");

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setForm((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.description || !form.author || !form.category) {
      setError("Please fill all required fields");
      return;
    }

    onSubmit(form); 
    // console.log(form);
    
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Blog Details</h1>
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <input
        type="text"
        name="title"
        placeholder="Blog Title"
        value={form.title}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        name="description"
        placeholder="Blog Description"
        rows={4}
        value={form.description}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="author"
        placeholder="Author"
        value={form.author}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {statuses.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <input className="w-full border border-gray-300 rounded-md px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer" type="file" accept="image/*" onChange={handleImage} />

      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          className="w-32 h-32 object-cover rounded border"
        />
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md 
                       hover:bg-blue-700 transition font-medium" 
      >
        Save Blog
      </button>
    </form>
    </div>
    </div>
  );
}

export default BlogForm;
