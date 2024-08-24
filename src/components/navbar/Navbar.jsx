import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { FaAt, FaBell, FaUser } from "react-icons/fa6";
import { getAuth } from "@firebase/auth";
import { FaSignOutAlt } from "react-icons/fa";
import { signOutUser } from "../../firebase/firebaseService";
import { useNavigate } from "react-router-dom";

const Navbar = ({ name }) => {
  const [openNotificaitons, setOpenNotification] = useState(false);
  const [showPane, setShowPane] = useState(false);
  const navigate = useNavigate();
  const user = getAuth();

  useEffect(() => {
    if (!user.currentUser) {
      navigate("/login");
    }
  }, [user, navigate]);

  const onClickNotificationButton = () => {
    setOpenNotification(!openNotificaitons);
    alert(openNotificaitons);
  };

  const clickProfile = () => {
    setShowPane(!showPane);
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
              <div>
                <button
                  className="notification-icon-box"
                  onClick={clickProfile}
                >
                  {/* <img src={userImage} alt="Profile" />
                <p className="user-name">{'Akhlaq'}</p> */}
                  <FaUser className="notificaion-icon" color="#21331d" />
                </button>
                <UserDetailsPane showPane={showPane} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const UserDetailsPane = ({ showPane }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  return (
    <div className={`user-details-pane ${showPane && "show-pane"}`}>
      <button className="pane-btn">
        <FaAt />
        <p>{auth.currentUser?.email ?? "null"}</p>
      </button>
      <button
        className="pane-btn"
        onClick={() => {
          signOutUser();
          navigate("/login", { replace: true });
        }}
      >
        <FaSignOutAlt />
        Signout
      </button>
    </div>
  );
};

export default Navbar;
