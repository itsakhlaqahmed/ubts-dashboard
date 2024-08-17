import React from "react";
import "./infoCard.css";
import { PiStudentFill } from "react-icons/pi";

const InfoCard = ({ heading, content, caption, icon, color }) => {
  heading = "Total Students";
  content = 25;
  caption = "Students";
  return (
    <div
      className="infocard-container"
      style={color ? { background: color } : {}}
    >
      <div className="infocard-heading">
        <PiStudentFill /> {heading}
      </div>
      <div className="infocard-content">
        <p className="infocard-main">{content}</p>
        <p className="infocard-caption">{caption}</p>
      </div>
    </div>
  );
};

export default InfoCard;
