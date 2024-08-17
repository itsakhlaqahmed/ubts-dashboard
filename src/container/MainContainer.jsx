import React from "react";
import Navbar from "../navbar/Navbar";
import LeftDrawer from "../left-drawer/LeftDrawer";
import "./main-container.css";
import InfoCard from "../infoCards/InfoCard";

const MainContainer = () => {
  return (
    <div className="main-container">
      <LeftDrawer />
      <div className="content-panel">
        <Navbar />
        <InfoCard />
        
      </div>
    </div>
  );
};

export default MainContainer;
