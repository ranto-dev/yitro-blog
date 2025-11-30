import { FaFacebook, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { name: "Accueil", href: "/" },
  { name: "Articles", href: "/articles" },
  { name: "Service", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [{ name: "Politique de Confidentialité", href: "/privacy" }];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-12 border-t border-gray-700">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-3xl font-extrabold text-blue-400 tracking-tight">
              YitroBLOG
            </h3>
            <p className="text-gray-400 text-sm">
              Votre source d'information quotidienne sur les technologies, le
              développement web et bien plus.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition duration-150 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Légal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition duration-150 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Réseaux Sociaux
            </h4>
            <div className="flex justify-start items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-150"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-150"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center md:flex justify-center items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Yitro-consulting. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
