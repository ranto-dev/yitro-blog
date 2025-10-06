import {
  FaCode,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaRegLightbulb,
} from "react-icons/fa";
import Header from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";
import { motion } from "framer-motion";

const services = [
  {
    icon: FaCode,
    title: "Développement Web Sur Mesure",
    description:
      "Nous transformons vos idées complexes en applications web performantes, modernes et optimisées pour le SEO. Expertise React, Node.js et Tailwind CSS.",
    details: [
      "Applications complètes (MERN)",
      "APIs RESTful sécurisées",
      "Refonte de sites existants",
    ],
    cta: "Demander un devis",
    delay: 0.2,
  },
  {
    icon: FaLaptopCode,
    title: "Consultation Technique & Audit",
    description:
      "Bénéficiez de l'expertise de nos architectes logiciels. Nous auditons votre code, optimisons les performances et conseillons sur les meilleures pratiques.",
    details: [
      "Optimisation de la performance",
      "Revue de code approfondie",
      "Planification de l'architecture cloud",
    ],
    cta: "Réserver une session",
    delay: 0.4,
  },
  {
    icon: FaChalkboardTeacher,
    title: "Formation et Mentoring Personnalisés",
    description:
      "Des sessions intensives pour votre équipe ou un mentorat individuel pour maîtriser les technologies front-end et back-end les plus demandées du marché.",
    details: [
      "Ateliers React & Vue",
      "Coaching individuel en JavaScript",
      "Meilleures pratiques CI/CD",
    ],
    cta: "Voir les programmes",
    delay: 0.6,
  },
  {
    icon: FaRegLightbulb,
    title: "Création de Contenu Technique",
    description:
      "Vous manquez de temps ? Nous rédigeons des articles de blog, des documentations ou des tutoriels techniques de haute qualité pour votre audience.",
    details: [
      "Rédaction de blogs invités",
      "Création de documentation API",
      "Newsletters techniques",
    ],
    cta: "Contacter l'équipe Contenu",
    delay: 0.8,
  },
];

function ServicesPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
            className="text-4xl mb-4"
          >
            Nos Services d'Expertise Technique
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.4,
            }}
            className="text-sm text-gray-600 max-w-3xl mx-auto"
          >
            Au-delà du partage de connaissances, nous mettons notre expertise au
            service de vos projets. Accélérez votre croissance avec une équipe
            de professionnels.
          </motion.p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: service.delay,
              }}
              key={index}
              className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-blue-600 
                         transform flex flex-col"
            >
              <div className="flex items-center mb-4">
                <service.icon className="h-10 w-10 text-blue-600 mr-4" />
                <h2 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h2>
              </div>

              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6 text-sm text-gray-700">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="mt-auto block w-full text-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md"
              >
                {service.cta}
              </a>
            </motion.div>
          ))}
        </section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.2,
          }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-10 rounded-xl shadow-2xl">
            <h3 className="text-2xl  text-gray-900 mb-3">
              Prêt à lancer votre projet ?
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Chaque besoin est unique. Contactez-nous pour une discussion sans
              engagement sur la manière dont nous pouvons vous aider.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition duration-300 shadow-lg"
            >
              Discuter de mon projet
            </a>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
}

export default ServicesPage;
