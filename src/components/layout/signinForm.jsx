import { useState } from "react";

const SigninForm = ({ onClose, onCreate }) => {
  const [signInfo, setSignInfo] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    conf_password: "",
  });

  const handleChange = (e) => {
    setSignInfo({ ...signInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!signInfo.username || !signInfo.password)
      return alert("Tous les champs sont requis !");
    onCreate(signInfo);
    onClose();
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h1 className="text-center text-3xl">Formulaire d'inscription</h1>
      <div className="space-y-2">
        <div>
          <label htmlFor="username">nom d'utilisateur</label>
          <input
            type="text"
            name="username"
            value={signInfo.username}
            onChange={handleChange}
            id="username"
            className="w-full border border-black/20 rounded-lg p-2"
            placeholder="ex: john-doe"
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            value={signInfo.email}
            onChange={handleChange}
            id="email"
            className="w-full border border-black/20 rounded-lg p-2"
            placeholder="ex: johndoe@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="phone">phone</label>
          <input
            type="tel"
            name="phone"
            value={signInfo.phone}
            onChange={handleChange}
            id="phone"
            className="w-full border border-black/20 rounded-lg p-2"
            placeholder="ex: 033 23 343 55"
          />
        </div>
        <div>
          <label htmlFor="password">mot de passe</label>
          <input
            type="password"
            name="password"
            value={signInfo.password}
            onChange={handleChange}
            id="password"
            className="w-full border border-black/20 rounded-lg p-2"
            placeholder="*****"
          />
        </div>
        <div>
          <label htmlFor="conf_password">Confirmer votre mot de passe</label>
          <input
            type="password"
            name="conf_password"
            value={signInfo.conf_password}
            onChange={handleChange}
            id="conf_password"
            className="w-full border border-black/20 rounded-lg p-2"
            placeholder="*****"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-4 rounded-full"
        >
          S'inscrire
        </button>
      </div>
    </form>
  );
};

export default SigninForm;
