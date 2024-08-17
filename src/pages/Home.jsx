import React from "react";
import MainContainer from "../container/MainContainer";
import InfoCard from "../infoCards/InfoCard";
import './page-styles.css';

const Home = () => {
  return (
    <MainContainer>
      <div className="infocard-row">
        <InfoCard color={'#cdc3ff'} />
        <InfoCard color={'#aac9ff'} />
        <InfoCard color={'#92e3b8'} />
        <InfoCard color={'#c8ec63'} />
        <InfoCard color={'#c8ec63'} />
      </div>
    </MainContainer>
  );
};

export default Home;
