import {
  FaCode,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaRegLightbulb,
  FaCheckCircle,
  FaComments,
  FaDraftingCompass,
  FaRocket,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import Header from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";

const services = [
  {
    icon: FaCode,
    title: "Développement Web Sur Mesure",
    description:
      "Conception et développement d’applications web performantes, évolutives et adaptées à vos enjeux business.",
    details: [
      "Applications React / Node.js",
      "APIs sécurisées & scalables",
      "Refonte & optimisation SEO",
    ],
    cta: "Demander un devis",
  },
  {
    icon: FaLaptopCode,
    title: "Consultation & Audit Technique",
    description:
      "Analyse approfondie de votre existant pour améliorer performance, sécurité et maintenabilité.",
    details: [
      "Audit de code & architecture",
      "Optimisation des performances",
      "Conseils cloud & bonnes pratiques",
    ],
    cta: "Réserver une session",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Formation & Mentoring",
    description:
      "Montée en compétence de vos équipes ou accompagnement individuel sur les technologies clés.",
    details: [
      "Formations React / JS",
      "Mentorat développeur",
      "Qualité & industrialisation",
    ],
    cta: "Voir les programmes",
  },
  {
    icon: FaRegLightbulb,
    title: "Création de Contenu Technique",
    description:
      "Production de contenus clairs et pédagogiques pour valoriser votre expertise.",
    details: [
      "Articles & blogs techniques",
      "Documentation & guides",
      "Contenus marketing tech",
    ],
    cta: "Contacter l’équipe",
  },
];

function ServicesPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="pt-28 pb-32 bg-gray-900 text-white text-center relative">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Nos services d’expertise
            <span className="text-blue-400"> technique & stratégique</span>
          </motion.h1>

          <p className="text-gray-300 text-lg">
            Nous accompagnons les entreprises dans la conception, l’optimisation
            et la valorisation de leurs projets numériques.
          </p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
      </section>

      {/* METHODE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-14">
            Notre méthode de travail
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: FaComments,
                title: "Écoute",
                desc: "Comprendre vos besoins et vos contraintes.",
              },
              {
                icon: FaDraftingCompass,
                title: "Analyse",
                desc: "Structurer une solution adaptée.",
              },
              {
                icon: FaCode,
                title: "Exécution",
                desc: "Développer avec rigueur et qualité.",
              },
              {
                icon: FaRocket,
                title: "Impact",
                desc: "Livrer des résultats concrets.",
              },
            ].map((step, i) => (
              <div key={i}>
                <step.icon className="text-blue-600 text-4xl mx-auto mb-4" />
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-15 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            Que vous soyez une startup, une PME ou une organisation en
            croissance,
            <strong> SK Yitro Consulting</strong> vous apporte une expertise
            concrète, orientée résultats et adaptée à vos enjeux réels.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col"
            >
              <service.icon className="text-blue-600 text-4xl mb-4" />

              <h2 className="text-xl font-semibold mb-3">{service.title}</h2>

              <p className="text-gray-600 text-sm mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6 text-sm text-gray-700">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="mt-auto block text-center px-4 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition shadow-md"
              >
                {service.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 text-black text-center">
        <h3 className="text-3xl font-bold mb-4">
          Prêt à lancer ou structurer votre projet ?
        </h3>
        <p className="text-black text-sm mb-8">
          Discutons ensemble de vos objectifs et voyons comment nous pouvons
          vous aider.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-10 py-4  bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:scale-105 duration-200 ease-in transition shadow-xl"
        >
          Discuter de mon projet
        </a>
      </section>

      <Footer />
    </>
  );
}

export default ServicesPage;
