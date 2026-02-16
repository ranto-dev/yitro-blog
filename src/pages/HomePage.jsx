import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFeatherAlt,
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaQuoteLeft,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa";

import Header from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";
import Modal from "../components/Modal.jsx";
import SigninForm from "../components/layout/signinForm.jsx";

import selectRandomObjects from "../utils/selectRandomObjects";
import { handleSignin } from "../utils/authentification.js";
import Hero3DObject from "../components/Hero3DObject.jsx";
import FeaturedBlogsSection from "../components/FeaturedBlogsSection.jsx";

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

      {/* HERO */}
      <Hero3DObject />

      {/* ARTICLES VEDETTES */}
      <FeaturedBlogsSection featuredBlogs={featuredBlogs} />

      {/* A PROPOS */}
      <section className="pt-24 pb-32 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="uppercase text-blue-600 font-semibold tracking-wide">
            À propos
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-gray-900">
            SK Yitro Consulting
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm max-w-3xl mx-auto">
            SK Yitro Consulting accompagne les entreprises dans leur
            transformation stratégique et digitale. À travers ce blog, nous
            partageons des analyses, retours d’expérience et bonnes pratiques
            pour aider les décideurs à prendre des décisions éclairées et
            durables.
          </p>
        </div>
      </section>

      {/* INTRO POURQUOI NOUS LIRE */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
            <p className="text-gray-700 text-sm leading-relaxed">
              Dans un environnement en constante évolution, disposer
              d’informations fiables et exploitables est devenu essentiel. Nos
              contenus sont conçus pour apporter une réelle valeur aux
              dirigeants, managers et équipes techniques, en reliant stratégie,
              technologie et prise de décision.
            </p>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS LIRE */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <FaLightbulb />,
              title: "Expertise terrain",
              desc: "Des analyses issues de projets réels et d’expériences concrètes.",
            },
            {
              icon: <FaChartLine />,
              title: "Vision stratégique",
              desc: "Une lecture claire des enjeux business et technologiques.",
            },
            {
              icon: <FaCogs />,
              title: "Approche pragmatique",
              desc: "Des recommandations applicables et orientées résultats.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-blue-600 text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">
          Ce que disent nos partenaires
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Une approche claire et orientée résultats.",
            "Des analyses pertinentes qui nous ont aidés à structurer notre stratégie.",
            "Un accompagnement sérieux et professionnel.",
          ].map((text, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-md">
              <FaQuoteLeft className="text-blue-600 mb-4" />
              <p className="text-gray-600 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHIFFRES CLES */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-3 text-center gap-8">
          <div>
            <FaUsers className="mx-auto text-3xl mb-2" />
            <p className="text-3xl font-bold">50+</p>
            <p className="text-blue-100">Clients accompagnés</p>
          </div>
          <div>
            <FaProjectDiagram className="mx-auto text-3xl mb-2" />
            <p className="text-3xl font-bold">100+</p>
            <p className="text-blue-100">Projets réalisés</p>
          </div>
          <div>
            <FaLightbulb className="mx-auto text-3xl mb-2" />
            <p className="text-3xl font-bold">5+</p>
            <p className="text-blue-100">Années d’expertise</p>
          </div>
        </div>
      </section>

      {/* NOTRE APPROCHE */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div>
              <p className="uppercase text-blue-600 font-semibold mb-2">
                Notre approche
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Plus qu’un blog, un véritable outil d’aide à la décision
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                Chez <strong>SK Yitro Consulting</strong>, nous croyons que
                l’information doit être claire, structurée et actionnable. Nos
                articles ne se contentent pas de décrire des tendances : ils
                aident à comprendre, anticiper et agir.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Que vous soyez dirigeant, manager ou porteur de projet, notre
                contenu est conçu pour vous faire gagner du temps, éviter les
                erreurs courantes et prendre des décisions alignées avec vos
                objectifs.
              </p>

              <Link
                to="/articles"
                className="inline-flex items-center text-blue-600 font-semibold hover:underline"
              >
                Découvrir notre vision <FaArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Points clés */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Clarté",
                  desc: "Des contenus structurés, compréhensibles et sans jargon inutile.",
                },
                {
                  title: "Pertinence",
                  desc: "Des sujets directement liés aux enjeux actuels des entreprises.",
                },
                {
                  title: "Vision long terme",
                  desc: "Une réflexion stratégique au-delà des effets de mode.",
                },
                {
                  title: "Valeur concrète",
                  desc: "Chaque article vise un impact réel et mesurable.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <div className="w-full h-48 relative overflow-hidden">
                    <img
                      src={'https://backblog.yitro-consulting.com/'+blog.main_image_url}
                      alt={blog.image_alt_text}
                      className="w-full h-full object-cover transition group-hover:scale-105 duration-500 "
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition duration-300">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {blog.meta_title
                        ? `${blog.meta_title.slice(0, 200)}...`
                        : "Pas de contenu disponible..."}
                    </p>
                    <Link
                      to={`/blog/${blog.id}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                    >
                      Lire la suite <FaArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-blue-600 text-white p-10 rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold flex items-center">
              <FaFeatherAlt className="mr-3" />
              Restez informé
            </h3>
            <p className="text-blue-100 mt-2">
              Recevez nos analyses et articles directement par email.
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
