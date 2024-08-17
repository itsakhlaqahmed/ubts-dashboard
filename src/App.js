import React from "react";
import MainContainer from "./container/MainContainer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// #f8590c orange color

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/passengers" Component={MainContainer} />
        <Route path="/drivers" Component={MainContainer} />
        <Route path="/routes" Component={MainContainer} />

        {/* <Route path="*" Component={NotFound} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
