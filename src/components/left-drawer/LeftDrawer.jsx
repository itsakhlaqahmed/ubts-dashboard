import React from "react";
import "./leftdrawer.css";
import { Link } from "react-router-dom";
import {
  FaHouse,
  FaBusSimple,
  // FaRoute
} from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";

const LeftDrawer = ({ activeTab }) => {
  return (
    <div className="leftdrawer-container">
      <div className="logo-container">
        <div className="ubts-logo">UBTS</div>
      </div>

      <div className="links-container">
        <ul>
          <li style={activeTab === 1 ? { background: "#ffffff2a" } : {}}>
            <Link to="/">
              <FaHouse />
              Home
            </Link>
          </li>
          <li style={activeTab === 2 ? { background: "#ffffff2a" } : {}}>
            <Link to="/students">
              <PiStudentFill />
              Students
            </Link>
          </li>
          <li style={activeTab === 3 ? { background: "#ffffff2a" } : {}}>
            <Link to="/drivers">
              <FaBusSimple />
              Drivers
            </Link>
          </li>
          {/* <li style={activeTab === 4 ? { background: "#ffffff2a" } : {}}>
            <Link to="/routes">
              <FaRoute />
              Routes
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default LeftDrawer;
