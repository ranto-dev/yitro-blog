import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./pages/BlogList.jsx";
import { FaSpinner } from "react-icons/fa6";
import BlogDetails from "./pages/BlogDetails.jsx";
import Loading from "./components/layout/loading.jsx";
import HomePage from "./pages/HomePage.jsx";

const ADMIN = {
  username: "admin",
  email: "admin@gmail.com",
  phone: "0343288655",
  password: "@admin123",
};

function App() {
  const [blogs, setBlogs] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    fetch("/blogs.json", {
      method: "GET",
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((response_json) => {
        setBlogs(response_json);
        setTimeout(() => {
          setIsLoaded(true);
        }, 1500);
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
          path="/article"
          element={<BlogList blogs={blogs} isAdmin={isAdmin} />}
        />
        <Route path="/blog/:blogId" element={<BlogDetails blogs={blogs} />} />
      </Routes>
    </Router>
  );
}

export default App;
