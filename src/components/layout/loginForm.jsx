import { useState } from "react";

const LoginForm = ({ onClose, onCreate }) => {
  const [loginInfo, setLoginnfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginnfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loginInfo.username || !loginInfo.password)
      return alert("Tous les champs sont requis !");
    onCreate(loginInfo);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h1 className="text-center text-3xl">Formulaire de connexion</h1>
      <div className="space-y-2">
        <div>
          <label htmlFor="username">nom d'utilisateur</label>
          <input
            type="text"
            name="username"
            value={loginInfo.username}
            onChange={handleChange}
            id="username"
            className="w-full border border-black/20 rounded-lg p-2"
            placeholder="ex: locas05"
          />
        </div>
        <div>
          <label htmlFor="password">mot de passe</label>
          <input
            type="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            id="password"
            className="w-full border border-black/20 rounded-lg p-2"
            placeholder="**********"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-4 rounded-full"
        >
          Se connecter
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
