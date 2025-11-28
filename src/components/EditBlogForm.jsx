import { useState } from "react";

function EditBlogForm({ blog, onClose, onSave }) {
  const [form, setForm] = useState({
    slug: blog.slug,
    meta_title: blog.meta_title,
    meta_description: blog.meta_description,
    meta_keywords: blog.meta_keywords,
    content_h1: blog.content_h1,
    content_body: blog.content_body,
    //main_image_url: blog.main_image_url,
    image_alt_text: blog.image_alt_text,
    publication_date: blog.publication_date,
    seo_score: blog.seo_score,
    is_published: blog.is_published,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(blog.id, form);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-title">
        <h2 className="text-xl text-center font-bold mb-2">
          Modifier une article
        </h2>
      </div>
      <div className="form-input space-y-4 text-sm">
        <div className="flex flex-col gap-1 ">
          <label htmlFor="slug">Slug(Séparer chaque mot par un "-")</label>
          <input
            value={form.slug}
            onChange={handleChange}
            type="text"
            name="slug"
            id="slug"
            className="w-full border border-neutral-500/20 p-2 rounded"
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="meta_title">Titre</label>
          <input
            value={form.meta_title}
            onChange={handleChange}
            type="text"
            name="meta_title"
            id="meta_title"
            className="w-full border border-neutral-500/20 p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="meta_description">Description</label>
          <textarea
            value={form.meta_description}
            onChange={handleChange}
            name="meta_description"
            id="meta_description"
            className="w-full border border-neutral-500/20 p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="meta_keywords">
            Mots cléfs(Séparer chaque mots par une virgule)
          </label>
          <input
            value={form.meta_keywords}
            onChange={handleChange}
            type="text"
            name="meta_keywords"
            id="meta_keywords"
            className="w-full border border-neutral-500/20 p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="content_h1">Contenu h1</label>
          <input
            value={form.content_h1}
            onChange={handleChange}
            type="text"
            name="content_h1"
            id="content_h1"
            className="w-full border border-neutral-500/20 p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="content_body">Contenu corps</label>
          <textarea
            value={form.content_body}
            onChange={handleChange}
            name="content_body"
            id="content_body"
            className="w-full border border-neutral-500/20 p-2 rounded"
            required
          />
        </div>
        {/* <div className="flex flex-col gap-1 ">
          <label htmlFor="main_image_url">Image principale</label>
          <input
            type="file"
            name="main_image_url"
            id="main_image_url"
            className="w-full border border-neutral-500/20 p-2 rounded"
            required
          />
        </div> */}
        <div className="flex flex-col gap-1 ">
          <label htmlFor="image_alt_text">Alt de l'image</label>
          <input
            value={form.image_alt_text}
            onChange={handleChange}
            type="text"
            name="image_alt_text"
            id="image_alt_text"
            className="w-full border border-neutral-500/20 p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <label htmlFor="seo_score">SEO Score</label>
          <input
            value={form.seo_score}
            onChange={handleChange}
            type="number"
            name="seo_score"
            id="seo_score"
            className="w-full border border-neutral-500/20 p-2 rounded"
            required
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-blue-500 hover:scale-105 duration-200 ease-in text-white px-4 py-2 rounded"
        >
          Modifier
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-300 hover:scale-105 duration-200 ease-in px-4 py-2 rounded"
        >
          Annuler
        </button>
      </div>
    </form>
  );
}

export default EditBlogForm;
