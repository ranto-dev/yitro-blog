import { useState } from "react";

function EditBlogForm({ blog, onClose, onSave }) {
  const [form, setForm] = useState({
    title: blog.title,
    content: blog.content,
    image: blog.image,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(blog.id, form);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-2">Modifier le blog</h2>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Titre"
        className="w-full border p-2 rounded"
      />
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Contenu"
        className="w-full border p-2 rounded h-32"
      />
      <input
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="URL image"
        className="w-full border p-2 rounded"
      />
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Enregistrer
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Annuler
        </button>
      </div>
    </form>
  );
}

export default EditBlogForm;
