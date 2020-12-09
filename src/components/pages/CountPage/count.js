import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const Count = '12 Dec 2020';
const Text = styled.span`
    font-size: 154px;
    line-height: 154px;
  `;

function Counter() {
  const calculateTimeLeft = () => {
    // let year = new Date().getFullYear();
    const CountDate = new Date(Count);
    // const difference = +new Date(`${year}-10-1`) - +new Date();
    const difference = new Date();

    const totalSeconds = (CountDate - difference) / 1000;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        일: Math.floor(totalSeconds / 3600 / 24),
        시간: Math.floor(totalSeconds / 3600) % 24 ,
        분: Math.floor(totalSeconds / 60) % 60 + 1,
        초: Math.floor(totalSeconds) % 60 + 1,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const [year] = useState(new Date().getFullYear());

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
      <Text>
        {timeLeft[interval]}{interval}{" "}
      </Text>
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