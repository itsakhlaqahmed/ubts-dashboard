import React from "react";
import MainContainer from "../container/MainContainer";
import InfoCard from "../infoCards/InfoCard";
import "./page-styles.css";
import useDataFetch from "../hooks/useDataFetch";

const Home = () => {

  const {data, isLoading, error} = useDataFetch('');

  const cardColors = {
    purpleAccent: "#cdc3ff",
    blueAccent: "#aac9ff",
    greenAccent: "#92e3b8",
  };



  return (
    <MainContainer>
      <div className="infocard-row">
        <InfoCard color={cardColors.purpleAccent} />
        <InfoCard color={cardColors.blueAccent} />
        <InfoCard color={cardColors.greenAccent} />
      </div>
      <div className="infocard-row">
        <InfoCard color={cardColors.blueAccent} />
        <InfoCard color={cardColors.purpleAccent} />
      </div>
    </MainContainer>
  );
};

export default Home;
