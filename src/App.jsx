import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./pages/BlogList.jsx";
import { FaSpinner } from "react-icons/fa6";
import BlogDetails from "./pages/BlogDetails.jsx";

function App() {
  const [blogs, setBlogs] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [isAdmin, setIsAdmin] = useState(true);

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
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex gap-4 justify-center items-center">
          <FaSpinner />
          <p>Loading</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<BlogList blogs={blogs} isAdmin={isAdmin} />}
        />
        <Route path="/blog/:blogId" element={<BlogDetails blogs={blogs} />} />
      </Routes>
    </Router>
  );
}

export default App;
