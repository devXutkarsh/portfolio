import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className=" bg-black pb-5  ">
      <div className=" bg-gray-800 rounded-xl px-3 py-3 mx-2 ">
        <h1 className="text-3xl">Get In Touch</h1>
        <p className="text-gray-400 text-center mt-4">
          I'm open to hearing about new opportunities and collaborations. Feel
          free to ask your doubts, questions, or just say hi.
        </p>
        <Link to="/contact">
          <button className="bg-white text-xl text-black px-10 py-1 mt-5 rounded-full">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
