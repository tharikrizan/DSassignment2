import React from "react";
import Header from "./components/header";
import "./App.css";
import SensorList from "./components/sensorList";
import DangerAndNormal from "./components/dangerAndNormal";

function App() {
  return (
    <div className="container">
      <Header />
      <DangerAndNormal />
      <SensorList />
    </div>
  );
}

export default App;
