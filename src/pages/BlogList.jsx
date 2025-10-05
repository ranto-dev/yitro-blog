import { useState } from "react";
import { FaCalendar, FaEye, FaPen, FaTrash } from "react-icons/fa6";
import Modal from "./components/Modal.jsx";
import EditBlogForm from "./components/EditBlogForm.jsx";
import CreateBlogForm from "./components/CreateBlogForm.jsx";
import { FaPlusCircle } from "react-icons/fa";

const BlogList = ({blogs}) => {
  const [modal, setModal] = useState({ type: null, blog: null });

  const openModal = (type, blog) => {
    setModal({ type, blog });
  };

  const closeModal = () => {
    setModal({ type: null, blog: null });
  };

  const handleCreateBlog = (newBlog) => {
    const id = Math.max(...blogs.map((b) => b.id), 0) + 1;
    setBlogs((prev) => [{ id, ...newBlog }, ...prev]);
  };

  const handleUpdateBlog = (id, updatedData) => {
    setBlogs((prev) =>
      prev.map((blog) => (blog.id === id ? { ...blog, ...updatedData } : blog))
    );
  };

  const handleDeleteBlog = (id) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    closeModal();
  };

  const renderModalContent = () => {
    const { type, blog } = modal;

    if (!type) return null;

    switch (type) {
      case "create":
        return (
          <CreateBlogForm onClose={closeModal} onCreate={handleCreateBlog} />
        );

      case "edit":
        return (
          blog && (
            <EditBlogForm
              blog={blog}
              onClose={closeModal}
              onSave={handleUpdateBlog}
            />
          )
        );

      case "delete":
        return (
          blog && (
            <>
              <h2 className="text-xl font-bold text-red-600 mb-2">
                Supprimer le blog
              </h2>
              <p>
                Voulez-vous vraiment supprimer <strong>{blog.title}</strong> ?
              </p>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => handleDeleteBlog(blog.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Supprimer
                </button>
                <button
                  onClick={closeModal}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Annuler
                </button>
              </div>
            </>
          )
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* boutton create post */}
      <div className="flex justify-end px-6 mb-4">
        <button
          onClick={() => openModal("create", null)}
          className={`flex justify-center items-center gap-2 bg-blue-500 text-white cursor-pointer px-4 py-2 rounded hover:bg-blue-700 hover:scale-105 duration-100 ease-in`}
        >
          <FaPlusCircle />
          <span>Nouveau publication</span>
        </button>
      </div>

      {/* body */}
      <section>
        <div className="w-full grid md:grid-cols-2 gap-6 lg:grid-cols-3 p-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col gap-6 rounded-xl bg-blue-500/10 shadow-xl relative group overflow-hidden"
            >
              <div className="w-full relative">
                <div
                  className={`p-1 rounded-lg absolute top-0 left-0 w-full h-full flex gap-2 justify-center items-center z-20 
                 opacity-0 group-hover:opacity-100 
                 transform translate-y-4 group-hover:translate-y-0
                 transition-all duration-300 ease-in-out`}
                >
                  <button
                    onClick={() => openModal("edit", blog)}
                    className={`bg-black/60 cursor-pointer text-amber-500 p-2 rounded-full text-lg 
                    transition duration-300 hover:bg-black/80`}
                  >
                    <FaPen />
                  </button>
                  <button
                    onClick={() => openModal("show", blog)}
                    className={`bg-black/40 cursor-pointer text-blue-500 p-2 rounded-full text-lg 
                    transition duration-300 hover:bg-black/70`}
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => openModal("delete", blog)}
                    className={`bg-black/20 cursor-pointer text-red-500 p-2 rounded-full text-lg 
                    transition duration-300 hover:bg-black/60`}
                  >
                    <FaTrash />
                  </button>
                </div>
                <img
                  src={blog.image}
                  alt={"image du publication n°" + blog.id}
                  className={`w-full h-[300px] rounded-t-xl object-cover border-none 
                  transition-all duration-300 ease-in-out 
                  group-hover:blur-sm`}
                />
              </div>
              <div className="space-y-4 p-4">
                <p className="text-2xl">{blog.title}</p>
                <p>
                  {blog.content.slice(0, 100)}
                  {blog.content.length <= 100 ? null : "..."}
                </p>
                <div className="flex justify-between items-center">
                  <p>⭐⭐⭐⭐⭐ | {"⭐"}</p>
                  <p className="flex gap-2 justify-center items-center text-gray-500">
                    <FaCalendar /> {blog.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Modal isOpen={modal.type !== null} onClose={closeModal}>
          {renderModalContent()}
        </Modal>
      </section>
      {/* footer */}
    </>
  );
};

export default BlogList;
