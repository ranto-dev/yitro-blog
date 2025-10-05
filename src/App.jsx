import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./BlogList";
import BlogDetail from "./BlogDetail";

function App() {
  const [blogs, setBlogs] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<BlogList blogs={blogs} isAdmin={isAdmin} />}
        />
        <Route path="/blog/:blogId" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
