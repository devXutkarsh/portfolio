import React from "react";
import { Link } from "react-router-dom";

function HumberMenu() {
  return (
    <div className="bg-black h-screen text-white ">
      <div className=" pt-32 pl-8 flex flex-col gap-10 text-3xl">
        <Link to={"/"}>Home </Link>
        <Link to={"/Blog"}>blog </Link>
        <Link to={"/Project"}>Project </Link>
        <Link to={"/Contact"}>Contact </Link>
      </div>
    </div>
  );
}

export default HumberMenu;
