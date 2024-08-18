import React from "react";
import Navbar from "../navbar/Navbar";
import LeftDrawer from "../left-drawer/LeftDrawer";
import "./main-container.css";

const MainContainer = ({ children, activeTab }) => {
  return (
    <div className="main-container">
      <LeftDrawer activeTab={activeTab} />
      <div className="main-display-panel">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default MainContainer;
