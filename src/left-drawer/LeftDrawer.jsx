import React from "react";
import "./leftdrawer.css";
import { Link } from "react-router-dom";
import { FaHouse, FaBusSimple, FaRoute } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";

const LeftDrawer = () => {
  return (
    <div className="leftdrawer-container">
      <div className="logo-container">
        <div className="ubts-logo">UBTS</div>
      </div>

      <div className="links-container">
        <ul>
          <li style={{ background: "#ffffff2a" }}>
            <Link to="/">
              <FaHouse />
              Home
            </Link>
          </li>
          <li>
            <Link to="/">
              <PiStudentFill />
              Students
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaBusSimple />
              Drivers
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaRoute />
              Routes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftDrawer;
