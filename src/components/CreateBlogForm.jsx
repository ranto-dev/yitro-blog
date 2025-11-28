function CreateBlogForm({ onClose, onCreate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    formData.set("date", new Date().toISOString());
    formData.set("author_id", window.localStorage.getItem("users_id"));
    onCreate(formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="form-title">
        <h2 className="text-xl text-center font-bold mb-2">
          Ajouter un nouveau blog
        </h2>
      </div>
      <div className="form-input space-y-4 text-sm">
        <div>
          <label htmlFor="slug">Slug(Séparer chaque mot par un "-")</label>
          <input
            type="text"
            name="slug"
            id="slug"
            className="w-full border border-neutral-500/20 p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="meta_title">Titre</label>
          <input
            type="text"
            name="meta_title"
            id="meta_title"
            className="w-full border border-neutral-500/20 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="meta_description">Description</label>
          <textarea
            name="meta_description"
            id="meta_description"
            className="w-full border border-neutral-500/20 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="meta_keywords">
            Mots cléfs(Séparer chaque mots par une virgule)
          </label>
          <input
            type="text"
            name="meta_keywords"
            id="meta_keywords"
            className="w-full border border-neutral-500/20 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="content_h1">Contenu h1</label>
          <input
            type="text"
            name="content_h1"
            id="content_h1"
            className="w-full border border-neutral-500/20 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="content_body">Contenu corps</label>
          <textarea
            name="content_body"
            id="content_body"
            className="w-full border border-neutral-500/20 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="main_image_url">Image principale</label>
          <input
            type="file"
            name="main_image_url"
            id="main_image_url"
            className="w-full border border-neutral-500/20 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="image_alt_text">Alt de l'image</label>
          <input
            type="text"
            name="image_alt_text"
            id="image_alt_text"
            className="w-full border border-neutral-500/20 p-2 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="seo_score">SEO Score</label>
          <input
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
          Ajouter
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

export default CreateBlogForm;
