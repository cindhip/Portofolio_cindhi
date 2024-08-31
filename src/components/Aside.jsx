import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa6";

const Aside = () => {
  const downloadBtn = () => {
    window.open('/CV.pdf', '_blank');
  };

  return (
    <div className="bg-dark-blue w-full lg:w-[400px] p-3 rounded-[10px] h-max relative text-white flex flex-col justify-between items-center">
      <img
        src="/try.jpeg"
        alt="placeholder"
        className="rounded-[15px] mt-4 w-56 h-56 lg:w-44 lg:h-44"
      />
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="mt-5 mb-2 text-xl font-bold">CINDHI PRATIWI</h2>
          <h4 className="bg-black rounded py-[5px] px-[10px]">
            UI/UX Designer
          </h4>
        </div>

        {/* SocMed */}
        <div className="mt-3 mb-6 flex gap-4 items-center justify-center">
          <div className="bg-black p-2 h-10 w-10 flex items-center justify-center rounded-lg transition duration-500 ease-in-out hover:scale-[1.2] hover:border hover:border-[rgba(255,255,255,0.1] hover:animate-pulse">
            <a href="https://www.instagram.com/owlardxvr">
              <FaInstagram className="text-light-purple text-xl" />
            </a>
          </div>
          <div className="bg-black p-2 h-10 w-10 flex items-center justify-center rounded-lg transition duration-500 ease-in-out hover:scale-[1.2] hover:border hover:border-[rgba(255,255,255,0.1] hover:animate-pulse">
            <a href="https://www.linkedin.com/in/cindhi-pratiwi-a162b7325">
              <FaLinkedin className="text-light-blue text-xl" />
            </a>
          </div>
        </div>

        {/* Contant Info */}
        <div className="bg-black px-4 py-2 rounded-2xl w-full">
          <div className="flex gap-10 items-center py-[10px] border-b border-b-[rgba(255,255,255,0.2)]">
            <div className="bg-[#111] h-10 w-10 leading-10 rounded flex items-center justify-center transition duration-500 ease-in-out hover:scale-[1.2] hover:border hover:border-[rgba(255,255,255,0.1] hover:animate-pulse">
              <FaPhone className="text-dark-magenta" />
            </div>
            <div>
              <span>Phone</span>
              <h5 className="font-bold">+62 831-8616-2178</h5>
            </div>
          </div>

          <div className="flex gap-10 items-center py-[10px] border-b border-b-[rgba(255,255,255,0.2)]">
            <div className="bg-[#111] h-10 w-10 leading-10 rounded flex items-center justify-center transition duration-500 ease-in-out hover:scale-[1.2] hover:border hover:border-[rgba(255,255,255,0.1] hover:animate-pulse">
              <FaEnvelopeOpen className="text-light-green" />
            </div>
            <div>
              <span>Email</span>
              <h5 className="font-bold">cindhipratiwii@gmail.com</h5>
            </div>
          </div>

          <div className="flex gap-10 items-center py-[10px]">
            <div className="bg-[#111] h-10 w-10 leading-10 rounded flex items-center justify-center transition duration-500 ease-in-out hover:scale-[1.2] hover:border hover:border-[rgba(255,255,255,0.1] hover:animate-pulse">
              <FaMapMarkerAlt className="text-light-purple" />
            </div>
            <div>
              <span>Location</span>
              <h5 className="font-bold">Yogyakarta, Indonesia</h5>
            </div>
          </div>
        </div>

        <button className="flex items-center gap-3 mb-4 text-white py-3 px-10 rounded-full mt-6 bg-gradient-to-r from-[#f64c57] to-[#e21b5a]" onClick={downloadBtn}>
          <FaDownload />
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Aside;
