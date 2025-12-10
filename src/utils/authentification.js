


export const handleSignin = (info) => {
  if (info.password === info.conf_password) {
    fetch("https://backblog.yitro-consulting.com/users", {
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
