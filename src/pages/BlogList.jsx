import { useState } from "react";
import { FaCalendar, FaEye, FaPen, FaTrash } from "react-icons/fa6";
import Modal from "../components/Modal.jsx";
import EditBlogForm from "../components/EditBlogForm.jsx";
import CreateBlogForm from "../components/CreateBlogForm.jsx";
import { FaPlusCircle } from "react-icons/fa";
import Header from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Month } from "./BlogDetails.jsx";
import { PiPictureInPicture } from "react-icons/pi";
import ImageAnnexeForm from "../components/ImageAnnexeForm.jsx";

const BlogList = ({ blogs, isAdmin }) => {
  const [modal, setModal] = useState({ type: null, blog: null });

  const openModal = (type, blog) => {
    setModal({ type, blog });
  };

  const closeModal = () => {
    setModal({ type: null, blog: null });
  };

  const handleCreateBlog = (newBlog) => {
    console.log(newBlog);
    fetch("https://blog.yitro-consulting.com/article", {
      method: "POST",
      headers: {
        authorization: "Bearer " + window.localStorage.getItem("access_token"),
      },
      body: newBlog,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert("Votre publication a été crée avec success!");
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  const handleUpdateBlog = (id, updatedData) => {
    console.log("handleUpdate" + id, updatedData);
    fetch("https://blog.yitro-consulting.com/article/" + id, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + window.localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        meta_title: updatedData.meta_title,
        content_h1: updatedData.content_h1,
        content_body: updatedData.content_body,
        slug: updatedData.slug,
        main_image_url: updatedData.main_image_url,
        image_alt_text: updatedData.image_alt_text,
        meta_description: updatedData.meta_description,
        meta_keywords: updatedData.meta_keywords,
        publication_date: updatedData.publication_date,
        seo_score: updatedData.seo_score,
        is_published: updatedData.is_published,
        author_id: updatedData.author_id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.error(err));

    alert("Votre publication a été modifée avec success!");
  };

  const handleDeleteBlog = (id) => {
    // code pour insertion
    console.log("Delete blog id: " + id);
    fetch("https://blog.yitro-consulting.com/article/" + id, {
      method: "DELETE",
      headers: {
        authorization: "Bearer " + window.localStorage.getItem("access_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.error(err));
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
      case "imageAnnexe":
        return blog && <ImageAnnexeForm onClose={closeModal} blog={blog} />;
      case "delete":
        return (
          blog && (
            <>
              <h2 className="text-xl font-bold text-red-600 mb-2">
                Supprimer le blog
              </h2>
              <p>
                Voulez-vous vraiment supprimer{" "}
                <strong>{blog.meta_title}</strong> ?{" "}
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
      <Header />
      <div className="flex justify-end px-6 mb-4">
        <button
          onClick={() => openModal("create", null)}
          className={`flex justify-center items-center gap-2 bg-blue-500 text-white cursor-pointer px-4 py-2 rounded hover:bg-blue-700 hover:scale-105 duration-100 ease-in ${
            isAdmin === true ? null : "hidden"
          }`}
        >
          <FaPlusCircle />
          <span>Nouvelle article</span>
        </button>
      </div>
      <section>
        <div className="w-full grid md:grid-cols-2 gap-6 lg:grid-cols-3 p-6">
          {blogs.map((blog) => (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: blog.id / 100,
              }}
              whileHover={{ scale: 1.02 }}
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
                  {/* ... boutons d'administration ... */}
                  <button
                    onClick={() => openModal("edit", blog)}
                    className={`bg-black/60 cursor-pointer text-amber-500 p-2 rounded-full text-lg 
                    transition duration-300 hover:bg-black/80 ${
                      isAdmin === true ? null : "hidden"
                    } `}
                  >
                    <FaPen />
                  </button>
                  <button
                    onClick={() => openModal("imageAnnexe", blog)}
                    className={`bg-black/60 cursor-pointer text-amber-500 p-2 rounded-full text-lg 
                    transition duration-300 hover:bg-black/80 ${
                      isAdmin === true ? null : "hidden"
                    } `}
                  >
                    <PiPictureInPicture />
                  </button>
                  <a
                    href={`/blog/${blog.slug}`}
                    className={`bg-black/40 cursor-pointer text-blue-500 p-2 rounded-full text-lg 
                    transition duration-300 hover:bg-black/70 flex justify-center items-center gap-2`}
                  >
                    <FaEye />
                    <span
                      className={`${isAdmin === true ? "hidden" : "block"} }`}
                    >
                      Voir plus
                    </span>
                  </a>
                  <button
                    onClick={() => openModal("delete", blog)}
                    className={`bg-black/20 cursor-pointer text-red-500 p-2 rounded-full text-lg 
                    transition duration-300 hover:bg-black/60  ${
                      isAdmin === true ? null : "hidden"
                    }`}
                  >
                    <FaTrash />
                  </button>
                </div>
                <img
                  src={blog.main_image_url}
                  alt={blog.image_alt_text || "Image de l'article n°" + blog.id}
                  className={`w-full h-[300px] rounded-t-xl object-cover border-none 
                  transition-all duration-300 ease-in-out 
                  group-hover:blur-xs`}
                />
              </div>
              <div className="space-y-4 p-4">
                <p className="text-2xl">{blog.meta_title || blog.content_h1}</p>{" "}
                <p>
                  {blog.content_body?.slice(0, 100)}
                  {blog.content_body?.length <= 100 ? null : "..."}
                </p>
                <div className="flex justify-between items-center">
                  <p>{isAdmin && `SEO Score: ${blog.seo_score}%`}</p>{" "}
                  <p className="flex gap-2 justify-center items-center text-gray-500">
                    <FaCalendar />
                    {new Date(blog.publication_date).getDate()}
                    {Month[new Date(blog.publication_date).getMonth()]}
                    {new Date(blog.publication_date).getFullYear()}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Modal isOpen={modal.type !== null} onClose={closeModal}>
          {renderModalContent()}
        </Modal>
      </section>
      <Footer />
    </>
  );
};

export default BlogList;
