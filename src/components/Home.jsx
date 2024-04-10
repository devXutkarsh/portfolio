import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Blog from "./Blog";
import Contact from "./Contact";
import ProjectPage from "./pages/ProjectPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import HumberMenu from "./pages/HumberMenu";

function Home() {
  return (
    <div className=" bg-black text-white">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Blog />
      <Contact />

      {/* <HumberMenu /> */}
    </div>
  );
}

export default Home;
