import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { MdDownload } from "react-icons/md";
import { Link } from "react-router-dom";

function Btn() {
  return (
    <div div className="mt-[30px] flex gap-2 flex-col">
      <Link to="/contact">
        <div className="btn flex  items-center justify-center bg-gray-700 text-black py-1 px-16 rounded-full ">
          <button className="text-xl font-semibold text-white ">
            Contect Me{" "}
          </button>
          <BiLogoTelegram className="text-2xl ml-2 text-white" />
        </div>
      </Link>
      <div className="flex  items-center justify-center bg-white text-black py-1 px-16 rounded-full">
        <button className="text-xl font-semibold">Download CV </button>
        <MdDownload className="text-2xl ml-2" />
      </div>
    </div>
  );
}

export default Btn;
