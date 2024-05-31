
import React from "react";
import TrafficLight from "./TrafficLights";

import "./styles.css";

const trafficStates = {
  green: {
    backgroundColor: "#04CA00",
    duration: 2000,
    next: "blackToGreen",
  },

  blackToGreen:{
    backgroundColor: "#585F68",
    duration: 300,
    next: "greenBlinking",
  },
  greenBlinking: {
    backgroundColor: "#04CA00",
    duration: 500,
    next: "yellow",
  },
  yellow: {
    backgroundColor: "#E9EC6A",
    duration: 2000,
    next: "red",
  },
  red: {
    backgroundColor: "#DF4040",
    duration: 2000,
    next: "redYellow",
  },
  redYellow: {
    backgroundColor: "#DF4040",
    duration: 1500,
    next: "green",
  },
};

const Task2: React.FC = () => {
  return (
    <div>
      <div className="wrapper">
        <TrafficLight trafficStates={trafficStates} />
      </div>
    </div>
  );
};

export default Task2;
