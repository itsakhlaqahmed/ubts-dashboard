import React from "react";
import MainContainer from "../components/container/MainContainer";
import InfoCard from "../components/infoCards/InfoCard";
import "./page-styles.css";

import { FaBusSimple, FaRoute } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";

const Home = () => {
  const cardColors = {
    purpleAccent: "#cdc3ff",
    blueAccent: "#aac9ff",
    greenAccent: "#92e3b8",
  };

  const handleFirestoreData = (data) => {
    return data.documents ? data.documents.length : 0;
  };

  const handleRealtimeDbData = (data) => {
    return Object.keys(data).length;
  };

  return (
    <MainContainer activeTab={1}>
      <div className="infocard-row">
        <InfoCard
          icon={<PiStudentFill />}
          heading="Total Students"
          caption="Students"
          color={cardColors.purpleAccent}
          onFetchData={handleFirestoreData}
          url={
            "https://firestore.googleapis.com/v1/projects/flutter-test-project-58f59/databases/(default)/documents/users"
          }
        />
        <InfoCard
          icon={<FaBusSimple />}
          heading="Buses"
          caption="Buses"
          color={cardColors.blueAccent}
          onFetchData={handleRealtimeDbData}
          url={
            "https://flutter-test-project-58f59-default-rtdb.firebaseio.com//Buses.json"
          }
        />
        <InfoCard
          icon={<FaRoute />}
          heading="Routes"
          caption="Routes"
          color={cardColors.greenAccent}
          onFetchData={handleRealtimeDbData}
          url={
            "https://flutter-test-project-58f59-default-rtdb.firebaseio.com//Routes.json"
          }
        />
      </div>
      <div className="infocard-row">
        <InfoCard
          icon={<FaBusSimple />}
          heading="Drivers"
          caption="Drivers"
          color={cardColors.blueAccent}
          onFetchData={handleFirestoreData}
          url={
            "https://firestore.googleapis.com/v1/projects/flutter-test-project-58f59/databases/(default)/documents/drivers"
          }
        />
        <InfoCard color={cardColors.purpleAccent} />
      </div>
    </MainContainer>
  );
};

export default Home;
