import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const COOKIE_KEY = "cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{}}
      transition={{
        type: "spring",
        stiffness: 100,
        delay: 0.5,
      }}
      className="fixed bottom-4 left-0 right-0 flex justify-center z-50"
    >
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-5 max-w-xl w-full mx-4 flex flex-col gap-4">
        <h1 className="text-xl text-center">
          Le respect de votre vie privéé est notre priorité.
        </h1>
        <div className="text-gray-800 text-sm text-center">
          En poursuivant votre navigation, vous acceptez l'utilisation de
          Cookies 🍪 de nos partenaire, Google et Facebook , déstinés à vos
          offrir une exprérience utilisateur de qualité grace à des contenus et
          publicités adaptés à vos centers d'intérets, à réaliser des
          statistiques d'audience, et à optimiser les fonctionnalités liées aux
          réseaux sociaux.
        </div>
        <div className="flex justify-center gap-4 w-full">
          <button
            onClick={handleReject}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors flex justify-center items-center gap-1"
          >
            <FaTimesCircle />
            Rejeter
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-blue-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors flex justify-center items-center gap-1"
          >
            <FaCheckCircle />
            Accepter
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieConsent;
