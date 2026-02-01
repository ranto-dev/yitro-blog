import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaFeatherAlt,
  FaLightbulb,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";

import Header from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";
import Modal from "../components/Modal.jsx";
import SigninForm from "../components/layout/signinForm.jsx";

import selectRandomObjects from "../utils/selectRandomObjects";
import { handleSignin } from "../utils/authentification.js";

function HomePage({ allBlogs }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const NUMBER_OF_BLOGS = 3;

  useEffect(() => {
    if (allBlogs?.length) {
      setFeaturedBlogs(
        selectRandomObjects(
          allBlogs,
          Math.min(NUMBER_OF_BLOGS, allBlogs.length),
        ),
      );
    }
  }, [allBlogs]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative pt-28 pb-32 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400"
          >
            SK Yitro Consulting • Blog & Insights
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Des analyses claires <br />
            <span className="text-blue-400">pour mieux décider</span>
          </motion.h1>

          <p className="mt-6 text-gray-300 text-lg">
            Articles, analyses et retours d’expérience pour accompagner les
            entreprises vers la performance.
          </p>

          <Link
            to="/articles"
            className="inline-flex items-center mt-10 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
          >
            Explorer les articles <FaArrowRight className="ml-3" />
          </Link>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <FaLightbulb />,
              title: "Expertise terrain",
              desc: "Des contenus basés sur des expériences réelles et des projets concrets.",
            },
            {
              icon: <FaChartLine />,
              title: "Vision stratégique",
              desc: "Comprendre les enjeux business, numériques et organisationnels.",
            },
            {
              icon: <FaCogs />,
              title: "Approche pragmatique",
              desc: "Des idées applicables, claires et directement exploitables.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-blue-600 text-3xl mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="mb-12">
            <p className="uppercase text-blue-600 font-medium">
              Sélection du moment
            </p>
            <p className="text-4xl font-bold text-gray-800">
              Articles à ne pas manquer
            </p>
          </h2>

          {featuredBlogs.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBlogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group"
                >
                  <img
                    src={blog.main_image_url}
                    alt={blog.image_alt_text}
                    className="h-44 w-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="p-6 space-y-3">
                    <span className="text-xs uppercase text-blue-500 font-semibold">
                      Article
                    </span>

                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 text-sm">
                      {blog.meta_title
                        ? `${blog.meta_title.slice(0, 140)}...`
                        : "Aucun contenu disponible"}
                    </p>

                    <Link
                      to={`/blog/${blog.id}`}
                      className="inline-flex items-center text-sm text-blue-600 font-medium hover:underline"
                    >
                      Lire l’article <FaArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Aucun article disponible.</p>
          )}
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="bg-blue-600 text-white p-10 rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold flex items-center">
              <FaFeatherAlt className="mr-3" />
              Restez informé
            </h3>
            <p className="text-blue-100 mt-2">
              Recevez nos derniers articles et analyses directement par email.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Recevoir les articles
          </button>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SigninForm
          onClose={() => setIsModalOpen(false)}
          onCreate={handleSignin}
        />
      </Modal>

      <Footer />
    </div>
  );
}

export default HomePage;
