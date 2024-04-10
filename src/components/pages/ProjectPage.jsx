import React from "react";
import Project from "../Project";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
function ProjectPage() {
  return (
    <div className="bg-black text-white py-4">
            <Link to="/menu">
    <div className="w-full py-5 px-4 text-white">
      <CiMenuFries className=" text-2xl" />
    </div>
  </Link>
      <Project />
    </div>
  );
}

export default ProjectPage;
