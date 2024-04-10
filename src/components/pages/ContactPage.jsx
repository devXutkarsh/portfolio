import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import Btn from "../Btn";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div className="bg-black pt-3 px-4 text-white pb-5">
        <Link to="/menu">
    <div className="w-full py-5 px-4 text-white">
      <CiMenuFries className=" text-2xl" />
    </div>
  </Link>
      <div className="my-20 ">
        <h1 className="text-center text-4xl ">Contact Me</h1>
        <p className="text-center text-[15px] text-gray-300 pt-3">
          want to connect ? my inbox is always open!
        </p>
      </div>
      <div className="bg-gray-800 p-5 mt- mx-2 rounded-2xl">
        <input
          type="text"
          placeholder="Name"
          className="bg-transparent outline-none "
        />
      </div>
      <div className="bg-gray-800 p-5 mt-5 mx-2 rounded-2xl">
        <input
          type="text"
          placeholder="Name"
          className="bg-transparent outline-none "
        />
      </div>
      <div className="bg-gray-800 p-5 mt-5 mx-2 rounded-2xl">
        <input
          type="text"
          placeholder="Name"
          className="bg-transparent outline-none "
        />
      </div>
      <div className="bg-gray-800 p-5 mt-5 mx-2 rounded-xl">
        <input
          type="text"
          className="bg-transparent outline-none p-10"
        />
      </div>
      <div className="flex  items-center justify-center bg-white text-black py-1 px-16 rounded-full mt-8">
      <button className="text-xl font-semibold">Contect Me </button>
      <BiLogoTelegram className="text-2xl ml-2" />
    </div>
    </div>
  );
}

export default ContactPage;
