import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import Btn from "./Btn";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="h-full text-white">
      <Link to="/menu">
        <div className="w-full py-5 px-4 text-white">
          <CiMenuFries className=" text-2xl" />
        </div>
      </Link>

      <div className="w-full h-[80%] flex flex-col justify-center items-center pt-24">
        <p className="text-4xl">Hii, i am</p>
        <h1 className="text-5xl pt-[2px]">Utkarsh Dixit</h1>
        <p className="text-center pt-[15px]">
          Welcome to my portfolio! I'm a dedicated frontend developer with a
          strong expertise in web development. I specialize in building dynamic
          and intuitive web applications.
        </p>
        <div className=" flex gap-10 text-3xl pt-5">
          <a href="https://www.github.com/devxutkarsh/">
            {" "}
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/devx-utkarsh-8617b1252/">
            <FaLinkedin className="icon" />
          </a>

          <a href="https://twitter.com/devxutkarsh?t=RYuBLC9Edmcd5hYmlmyjpw&s=09">
            <BsTwitterX className="icon" />{" "}
          </a>

          <a href="https://www.instagram.com/u_tkarsh_dixit?utm_source=qr&igsh=NHM1Nmx2eG5oNTVy">
            <FaInstagram className="icon" />
          </a>
          <a href="https://app.netlify.com/teams/dixitu57/overview">
            <BiLogoNetlify className="icon" />
          </a>
        </div>
        <Btn />
      </div>
    </div>
  );
}

export default Hero;
