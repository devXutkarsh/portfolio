import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import ProjectPage from "./components/pages/ProjectPage";
import BlogPage from "./components/pages/BlogPage";
import ContactPage from "./components/pages/ContactPage";
import HumberMenu from "./components/pages/HumberMenu";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<ProjectPage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/menu" element={<HumberMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
