import React from "react";
import MainContainer from "./components/container/MainContainer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Students from "./pages/Students";
import Drivers from "./pages/Drivers";

// #f8590c orange color

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/students" Component={Students} />
        <Route path="/drivers" Component={Drivers} />
        <Route path="/routes" Component={MainContainer} />

        {/* <Route path="*" Component={NotFound} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
