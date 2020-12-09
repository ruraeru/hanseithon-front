import React, { useEffect, useState } from "react";

const Count = 'Dec 12, 2020 18:30:01';

function Counter() {
  const calculateTimeLeft = () => {
    const CountDate = new Date(Count);
    const difference = new Date();

    const totalSeconds = (CountDate - difference) / 1000;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        // 일: Math.floor(totalSeconds / 3600 / 24),
        시간: (Math.floor(totalSeconds / 3600) % 24),
        분: (Math.floor(totalSeconds / 60) % 60),
        초: (Math.floor(totalSeconds) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

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
      <>
        {timeLeft[interval]}{interval}{" "}
      </>
    );
  });
  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

export default Counter;