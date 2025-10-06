import { useState, useEffect } from "react";
import selectRandomObjects from "../utils/selectRandomObjects";
import { FaArrowRight, FaFeatherAlt } from "react-icons/fa";
import Header from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";
import Modal from "../components/Modal.jsx";
import SigninForm from "../components/layout/signinForm.jsx";
import { Link } from "react-router-dom";
import { handleSignin } from "../utils/authentification.js";

function HomePage({ allBlogs }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const NUMBER_OF_BLOGS = 3;

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (allBlogs && allBlogs.length > 0) {
      const count = Math.min(NUMBER_OF_BLOGS, allBlogs.length);
      const selected = selectRandomObjects(allBlogs, count);
      setFeaturedBlogs(selected);
    }
  }, [allBlogs]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="relative pt-24 pb-32 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center z-10 relative">
          <h1 className="text-4xl tracking-tight mb-4 space-y-5">
            <p>Visiter nos publication et nous connaître d'avantage</p>
            <span className="text-blue-400">YitroBLOG</span>
          </h1>
          <p className="text-sm text-gray-300 mb-8 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link
            to="/article"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Commencer maintenant <FaArrowRight className="ml-3 h-4 w-4" />
          </Link>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16">
          <h2 className="text-gray-800 mb-8 border-b-2 border-blue-500 pb-2 inline-block">
            <p className="uppercase">Notre Sélection du Moment :</p>
            <p className="text-4xl">Trois Articles à Ne Pas Manqué</p>
          </h2>

          {featuredBlogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-xl shadow-xl overflow-hidden group transition duration-300 hover:shadow-2xl"
                >
                  <div className="w-full h-48 relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition duration-300">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {blog.excerpt
                        ? `${blog.excerpt.slice(0, 120)}...`
                        : "Pas de contenu disponible..."}
                    </p>
                    <Link
                      to={`/blog/${blog.id}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                    >
                      Lire la suite <FaArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              Aucun article disponible pour le moment.
            </p>
          )}
        </section>

        <section className="py-16">
          <div className="bg-blue-600 text-white p-10 rounded-xl shadow-2xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start">
                <FaFeatherAlt className="mr-3 h-6 w-6" />
                Ne manquez rien de neuf !
              </h3>
              <p className="text-blue-100 mt-1">
                Abonnez-vous à notre newsletter pour recevoir les derniers
                articles directement par email.
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
            >
              S'inscrire maintenant
            </button>
          </div>
        </section>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <SigninForm onClose={closeModal} onCreate={handleSignin} />
        </Modal>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
