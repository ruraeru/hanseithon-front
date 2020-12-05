import React, { useEffect, useState } from "react";
import "./App.css";

const Count = '6 Dec 2020';

function Counter() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const CountDate = new Date(Count);
    // const difference = +new Date(`${year}-10-1`) - +new Date();
    const difference = new Date();

    const totalSeconds = (CountDate - difference) / 1000;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(totalSeconds / 3600 / 24),
        hours: Math.floor(totalSeconds / 3600) % 24,
        minutes: Math.floor(totalSeconds / 60) % 60,
        seconds: Math.floor(totalSeconds) % 60,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{""}
      </span>
    );
  });
  return (
    <div>
      {/* <h1>HacktoberFest {year} Countdown</h1>
      <h2>With React Hooks!</h2> */}
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

export default Counter;