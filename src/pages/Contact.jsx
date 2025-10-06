import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Header from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";

function ContactPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section className="text-center mb-12">
            <h1 className="text-4xl text-black mb-4">Contactez-Nous</h1>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </section>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 bg-white p-8 rounded-xl shadow-lg h-full">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-2">
                Détails
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start text-gray-700">
                  <FaMapMarkerAlt className="h-6 w-6 text-blue-600 flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Adresse du Bureau</p>
                    <p>1234-T 123 Antsirabe, Madagascar</p>
                  </div>
                </li>
                <li className="flex items-start text-gray-700">
                  <FaEnvelope className="h-6 w-6 text-blue-600 flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Email Général</p>
                    <p>sk@yitro-consulting.com</p>
                  </div>
                </li>
                <li className="flex items-start text-gray-700">
                  <FaPhone className="h-6 w-6 text-blue-600 flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p>+261 23 145 67</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 border-t pt-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Suivez-nous
                </h3>
                <div className="flex space-x-5">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition duration-150"
                  >
                    <FaFacebook className="h-7 w-7" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-400 transition duration-150"
                  >
                    <FaTwitter className="h-7 w-7" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-700 transition duration-150"
                  >
                    <FaLinkedin className="h-7 w-7" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-pink-500 transition duration-150"
                  >
                    <FaInstagram className="h-7 w-7" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl text-gray-900 mb-6 border-b pb-2">
                Envoyez-nous un Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Votre Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
