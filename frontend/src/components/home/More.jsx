import React, { act, useState } from "react";
import Content from "./Content";
import Portofolio from "./Portofolio";

const More = () => {
  const [activeScreen, setActiveScreen] = useState("About");

  const renderScreen = () => {
    switch (activeScreen) {
      case "About":
        return <Content setActiveScreen={setActiveScreen} />;
      case "Portofolio":
        return <Portofolio setActiveScreen={setActiveScreen}/>;
    }
  };

  return <>{renderScreen()}</>;
};

export default More;
