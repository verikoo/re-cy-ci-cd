import React, { useEffect, useState } from "react";

interface TrafficState {
  backgroundColor: string;
  duration: number;
  next: string;
}

interface TrafficStates {
  [key: string]: TrafficState;
}

interface Props {
  trafficStates: TrafficStates;
}

const TrafficLight: React.FC<Props> = ({ trafficStates }) => {
  const [currentColor, setCurrentColor] = useState<string>("red");
  const [isBlinking, setIsBlinking] = useState<boolean>(false);

  useEffect(() => {
    const { duration, next } = trafficStates[currentColor];
    let timerId: NodeJS.Timeout;

    if (currentColor === "red") {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
        setCurrentColor(next);
      }, 2000); 
    } else {
      timerId = setTimeout(() => {
        setCurrentColor(next);
      }, duration);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor, trafficStates]);

  return (
    <div className="traffic-light-container">
      <div
        className="traffic-light red"
        style={{
          backgroundColor:
            currentColor === "red" || currentColor === "redYellow"
              ? trafficStates.red.backgroundColor
              : undefined,
        }}
      />
      <div
        className="traffic-light yellow"
        style={{
          backgroundColor:
            currentColor === "yellow" || currentColor === "redYellow"
              ? trafficStates.yellow.backgroundColor
              : undefined,
        }}
      />
      <div
        className="traffic-light green"
        style={{
          backgroundColor:
            currentColor === "green" || (currentColor === "greenBlinking" && !isBlinking)
              ? trafficStates.green.backgroundColor
              : undefined,
          animation: currentColor === "greenBlinking" && isBlinking ? "blink 1s infinite" : "none",
        }}
      />
    </div>
  );
};

export default TrafficLight;
