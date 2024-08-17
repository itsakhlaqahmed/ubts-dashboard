import React from "react";
import "./infoCard.css";
import useDataFetch from "../../hooks/useDataFetch";
import { ShimmerDiv } from "shimmer-effects-react";

const InfoCard = ({ url, heading, caption, icon, color, onFetchData }) => {

  var { data, isLoading, error } = useDataFetch(url);

  return isLoading ? (
    <ShimmerDiv mode="light" rounded={0.5} height={160} width={160 * 1.778} />
  ) : error ? (
    <div className="infocard-container">{"error"}</div>
  ) : (
    <div
      className="infocard-container"
      style={color ? { background: color } : {}}
    >
      <div className="infocard-heading">
        {icon} {heading}
      </div>
      <div className="infocard-content">
        <p className="infocard-main">
          {data ? onFetchData(data) : "couldn't load data"}
        </p>
        <p className="infocard-caption">{caption}</p>
      </div>
    </div>
  );
};

export default InfoCard;
