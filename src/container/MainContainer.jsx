import React from "react";
import Navbar from "../navbar/Navbar";
import LeftDrawer from "../left-drawer/LeftDrawer";
import './main-container.css';

const MainContainer = () => {
  return (
    <div className="main-container">  
      <LeftDrawer />
      <Navbar />
    </div>
  );
};

export default MainContainer;
