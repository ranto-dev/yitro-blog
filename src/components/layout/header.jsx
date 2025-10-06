import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import Modal from "../Modal.jsx";
import LoginForm from "./loginForm.jsx";
import SigninForm from "./signinForm.jsx";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Articles", href: "/article" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState({ type: null, blog: null });

  const openModal = (type) => {
    setModal({ type });
  };

  const closeModal = () => {
    setModal({ type: null });
  };

  const handleLogin = (info) => {
    // code pour le login
    console.log(info);
    alert("Connexion réussi!");
  };

  const handleSignin = (info) => {
    // code pour l'inscription
    console.log(info);
    alert("Insription réussi!");
  };

  const renderModalContentAuth = () => {
    const { type } = modal;

    if (!type) return null;

    switch (type) {
      case "login":
        return <LoginForm onClose={closeModal} onCreate={handleLogin} />;

      case "signin":
        return <SigninForm onClose={closeModal} onCreate={handleSignin} />;

      default:
        return null;
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex-shrink-0 text-3xl font-extrabold text-blue-700 tracking-tight transition duration-150 hover:text-blue-800"
          >
            YitroBLOG
          </Link>

          {/* Navigation (Desktop) */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-600 font-medium py-2 px-3 rounded-md hover:bg-gray-100 hover:text-blue-600 transition duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex space-x-3">
              <button
                onClick={() => openModal("login")}
                className="flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-lg text-blue-600 hover:bg-blue-50 transition duration-150"
              >
                <FaSignInAlt className="mr-2 h-4 w-4" />
                Connexion
              </button>

              <button
                onClick={() => openModal("signin")}
                className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
              >
                <FaUserPlus className="mr-2 h-4 w-4" />
                Inscription
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition duration-150"
              >
                <span className="sr-only">Ouvrir le menu principal</span>
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile (Transition pour un effet slide) */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
          {navLinks.map((link) => (
            // Remplacez <a> par <Link to={...}> si vous utilisez React Router
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}

          <div className="pt-4 space-y-3 border-t border-gray-200">
            <button
              onClick={() => openModal("login")}
              className="flex items-center justify-center w-full px-4 py-2 border border-blue-600 text-base font-medium rounded-lg text-blue-600 hover:bg-blue-100 transition duration-150"
            >
              <FaSignInAlt className="mr-2" />
              Connexion
            </button>
            <button
              onClick={() => openModal("signin")}
              className="flex items-center justify-center w-full px-4 py-2 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
            >
              <FaUserPlus className="mr-2" />
              Inscription
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={modal.type !== null} onClose={closeModal}>
        {renderModalContentAuth()}
      </Modal>
    </header>
  );
};

export default Header;
