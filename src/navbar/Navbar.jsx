import React from "react";
import "./Navbar.css";

import { FaBell } from "react-icons/fa6";

const Navbar = ({ name }) => {
  const userImage =
    "https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg";

  return (
    <nav>
      <div className="header">
        <div className="nav-container">
          <ul>
            <li>
              <button className="notification-icon-box" onClick={()=>{alert('click')}}>
                <FaBell className="notificaion-icon"/>
              </button>
            </li>
            <li>
              <div className="profile-pic">
                <img src={userImage} alt="Profile Picture" />
                <p className="user-name">{name}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
