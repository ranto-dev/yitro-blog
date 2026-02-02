import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaLinkedin,
  FaCheckCircle,
} from "react-icons/fa";
import Header from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function ContactPage() {
  const sumbmitMail = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);

    fetch("https://blog.yitro-consulting.com/email", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        sender: formData.get("sender"),
        content: formData.get("content"),
        name: formData.get("name"),
        subject: formData.get("subject"),
      }),
    })
      .then((res) => res.json())
      .then(() => alert("Votre message a bien été envoyé ✅"))
      .catch(() => alert("Erreur lors de l'envoi du message ❌"));
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-r  bg-gray-900 py-20 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
          className="text-4xl font-bold mb-4"
        >
          Parlons de votre projet
        </motion.h1>
        <p className="max-w-3xl mx-auto text-sm opacity-90">
          Une idée, un besoin ou un projet en cours ? Notre équipe est prête à
          vous accompagner avec des solutions technologiques sur mesure.
        </p>
      </section>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* POURQUOI NOUS CONTACTER */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-semibold mb-4">
              Pourquoi contacter Yitro Consulting ?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm">
              Nous ne nous contentons pas de répondre : nous analysons,
              conseillons et construisons des solutions fiables adaptées à votre
              contexte métier.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-10">
              {[
                "Réponse rapide et personnalisée",
                "Expertise technique éprouvée",
                "Accompagnement stratégique",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center space-x-3"
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CONTACT */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* INFOS */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 80 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 border-b pb-2">
                Coordonnées
              </h3>

              <ul className="space-y-6 text-sm">
                <li className="flex">
                  <FaMapMarkerAlt className="text-blue-600 mt-1 mr-4" />
                  <span>
                    Lot 304-D-240, Andafiatsimo Ambohitrinibe 110, Madagascar
                  </span>
                </li>
                <li className="flex">
                  <FaEnvelope className="text-blue-600 mt-1 mr-4" />
                  <span>contact@yitro-consulting.com</span>
                </li>
                <li className="flex">
                  <FaPhone className="text-blue-600 mt-1 mr-4" />
                  <span>+261 34 53 313 87</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t">
                <p className="font-semibold mb-4">Suivez-nous</p>
                <div className="flex space-x-5">
                  <FaFacebook className="h-6 w-6 cursor-pointer hover:text-blue-600" />
                  <FaLinkedin className="h-6 w-6 cursor-pointer hover:text-blue-700" />
                </div>
              </div>
            </motion.div>

            {/* FORMULAIRE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 80 }}
              className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 border-b pb-2">
                Envoyez-nous un message
              </h3>

              <form className="space-y-5" onSubmit={sumbmitMail}>
                {[
                  { label: "Nom complet", name: "name", type: "text" },
                  { label: "Adresse email", name: "sender", type: "email" },
                  { label: "Sujet", name: "subject", type: "text" },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm mb-1">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm mb-1">Message</label>
                  <textarea
                    name="content"
                    rows="4"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Envoyer le message
                </button>

                <p className="text-xs text-gray-500">
                  En envoyant ce formulaire, vous acceptez notre{" "}
                  <a href="#" className="text-blue-600 underline">
                    politique de confidentialité
                  </a>
                  .
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;
