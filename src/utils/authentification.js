export const handleLogin = (info) => {
  console.log(info);

  let data = new FormData();
  data.set("username", info.username);
  data.set("password", info.password);

  fetch("https://blog.yitro-consulting.com/token", {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((response) => {
      window.localStorage.setItem("acces_token", response.access_token);
    })
    .catch((error) => console.error(error));

  alert("Connexion réussi!");
};

export const handleSignin = (info) => {
  if (info.password === info.conf_password) {
    fetch("https://blog.yitro-consulting.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password,
        email: info.email,
        full_name: info.full_name,
        role: "user",
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  } else {
    alert("Il y a une erreur");
  }
  alert("Insription réussi!");
};
