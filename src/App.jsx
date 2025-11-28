import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./pages/BlogList.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import Loading from "./components/layout/loading.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/Service.jsx";
import ContactPage from "./pages/Contact.jsx";

export let handleLogin = (info) => {};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

function App() {
  const [blogs, setBlogs] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [admin, setAdmin] = useLocalStorage("isAdmin", false);
  //const [isAdmin, setIsAdmin] = useState(admin);
  const [isAdmin, setIsAdmin] = useState(true);
  const [users_id, setUsersID] = useLocalStorage("users_id", 0);
  const [users_full_name, setUsersFullName] = useLocalStorage(
    "users_full_name",
    ""
  );
  const [users_username, setUsersUsername] = useLocalStorage(
    "users_username",
    ""
  );
  const [connected, setConnected] = useLocalStorage("connected", false);

  const handle = async (info) => {
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
        console.log(response);

        window.localStorage.setItem("access_token", response.access_token);
        fetch("https://blog.yitro-consulting.com/users/me", {
          headers: {
            authorization: "Bearer " + response.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.role === "admin") {
              console.log("admin");
              setUsersID(res.id);
              setUsersFullName(res.full_name);
              setUsersUsername(res.username);
              setConnected(true);
              setIsAdmin(true);
              setAdmin(true);
            }
          });
      })
      .catch((error) => console.error(error));

    alert("Connexion réussi!");
  };
  handleLogin = handle;
  // useEffect(()=>{
  //   window.location.reload()
  // }, [handle])
  useEffect(() => {
    const abortController = new AbortController();

    fetch("https://blog.yitro-consulting.com/users/me", {
      headers: {
        authorization: "Bearer " + window.localStorage.getItem("access_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.detail === "Could not validate credentials") {
          console.log("admin");
          setUsersID(0);
          setUsersFullName("");
          setUsersUsername("");
          setConnected(false);
          setAdmin(false);
        }
      });

    fetch("/blogs.json", {
      method: "GET",
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((response_json) => {
        setBlogs(response_json);
        setTimeout(() => {
          setIsLoaded(true);
        }, 1000);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch annulé");
        } else {
          console.error("Erreur lors du fetch:", error);
        }
      });

    return () => {
      abortController.abort();
    };
  }, []);

  if (isLoaded === false) {
    return <Loading />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage allBlogs={blogs} />} />
        <Route
          path="/articles"
          element={<BlogList blogs={blogs} isAdmin={isAdmin} />}
        />
        <Route path="/blog/:blogId" element={<BlogDetails blogs={blogs} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
