export default function ImageAnnexeForm({ onClose, blog }) {
  const submitFile = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    formData.set("article_id", blog.id);
    fetch("https://blog.yitro-consulting.com/image/annexe", {
      method: "POST",
      headers: {
        authorization: "Bearer " + window.localStorage.getItem("access_token"),
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Image Uploaded");
        console.log(res);
        onClose();
      })
      .catch((err) => console.error(err));
  };
  return (
    <form onSubmit={submitFile} className="space-y-6">
      <h2 className="font-semibold text-center">Ajouter une image annexe</h2>
      <label htmlFor="annexe_image">
        Choisir une image (format png et jpg seulement)
      </label>
      <input
        type="file"
        name="image"
        id="annexe_image"
        className="w-full border p-2 rounded"
        multiple
      />
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-blue-500 hover:scale-105 duration-200 ease-in text-white px-4 py-2 rounded"
        >
          Enregistrer
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
