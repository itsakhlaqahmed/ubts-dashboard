import React from "react";
import Navbar from "../navbar/Navbar";
import LeftDrawer from "../left-drawer/LeftDrawer";
import "./main-container.css";
import InfoCard from "../infoCards/InfoCard";

const MainContainer = ({children}) => {
  return (
    <div className="main-container">
      <LeftDrawer />
      <div className="main-display-panel">
        <Navbar />
        {children}
        
      </div>
    </div>
  );
};

export default MainContainer;
