import React, { useState } from "react";
import "./Navbar.css";

import { FaBell } from "react-icons/fa6";

const Navbar = ({ name }) => {
  const [openNotificaitons, setOpenNotification] = useState(false);
  const [openProfilePanel, setOpenProfilePanel] = useState(false);
  const userImage =
    "https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg";

  const onClickNotificationButton = () => {
    setOpenNotification(!openNotificaitons);
    alert(openNotificaitons);
  };

  const onClickProfile = () => {
    setOpenProfilePanel(!openProfilePanel);
    alert(openProfilePanel);
  };

  return (
    <nav>
      <div className="header">
        <div className="nav-container">
          <p className="nav-title">Dashboard</p>
          <ul>
            <li>
              <button
                className="notification-icon-box"
                onClick={onClickNotificationButton}
              >
                <FaBell className="notificaion-icon" />
              </button>
            </li>
            <li>
              <button className="profile-pic" onClick={onClickProfile}>
                <img src={userImage} alt="Profile" />
                <p className="user-name">{name}</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
