export default function ImageAnnexeForm({ onClose, blog }) {
    const submitFile = (e) => {
        e.preventDefault()
        let formData = new FormData(e.target)
        formData.set("article_id", blog.id)
        fetch("https://blog.yitro-consulting.com/image/annexe", {
            method: "POST",
            headers: {
                "authorization": "Bearer " + window.localStorage.getItem("access_token")
            },
            body: formData
        })
            .then(res => res.json())
            .then(res => {
                alert("Image Uploaded")
                onClose()
            })
            .catch(err => console.error(err))
    }
    return <form onSubmit={submitFile} className="space-y-4">
        <h2>Ajouter une image annexe</h2>
        <input type="file" name="image" className="w-full border p-2 rounded" multiple />
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
}