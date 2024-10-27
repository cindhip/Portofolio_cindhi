import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";

const Portofolio = ({ setActiveScreen }) => {
  const [activeTab, setActiveTab] = useState("UI/UX");

  const renderTab = () => {
    switch (activeTab) {
      case "UI/UX":
        return <Tab1 />;
      case "Design":
        return <Tab2 />;
      case "Certs":
        return <Tab3 />;
    }
  };
  return (
    <>
      <div className="flex justify-between">
        <h1 className="mb-4 relative inline-block text-5xl font-bold after:absolute after:content-[''] after:top-1/2 after:right-1/2 w-[45%] after:h-[3px] after:bg-gradient-to-r after:from-[#f64c57] after:to-[#e21b5a]">
          My Portfolio
        </h1>
        <IoClose
          className="text-4xl cursor-pointer"
          onClick={() => setActiveScreen("About")}
        />
      </div>
      <p className="text-[#555] my-2">
        "My portfolio is a testament to my passion for crafting exceptional
        digital experiences. Explore my projects and see how I've combined
        design and development to create beautiful and functional solutions. My
        certifications further validate my expertise in the field.".
      </p>

      {/* Nav desktop */}
      <nav className="hidden md:flex justify-between items-center rounded-lg bg-dark-blue text-white">
        <ul className="flex flex-row list-none w-full justify-around">
          <li
            className={`cursor-pointer w-36 xl:w-44 py-1 flex justify-center items-center ${
              activeTab == "UI/UX" ? "font-bold border-b-2 border-sky-900" : ""
            }`}
            onClick={() => setActiveTab("UI/UX")}
          >
            <a>UI/UX</a>
          </li>
          <li
            className={`cursor-pointer w-36 xl:w-48 py-1 flex justify-center items-center ${
              activeTab == "Design" ? "font-bold border-b-2 border-sky-900" : ""
            }`}
            onClick={() => setActiveTab("Design")}
          >
            <a className="text-center">Design</a>
          </li>
          <li
            className={`cursor-pointer w-36 xl:w-44 py-1 flex justify-center items-center ${
              activeTab == "Certs" ? "font-bold border-b-2 border-sky-900" : ""
            }`}
            onClick={() => setActiveTab("Certs")}
          >
            <a>Certificate</a>
          </li>
        </ul>
      </nav>

      {/* Nav mobile */}
      <nav className="md:hidden flex justify-between items-center rounded-lg bg-dark-blue text-white">
        <select
          className="w-full py-2 px-4 bg-dark-blue text-white"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          <option value="UI/UX">UI/UX </option>
          <option value="Design">Design</option>
          <option value="Certs">Certificate</option>
        </select>
      </nav>
      <div className="p-4">{renderTab()}</div>
    </>
  );
};

export default Portofolio;
