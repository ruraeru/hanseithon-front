import React from 'react';

function countdown() {
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");
    const secondsEl = document.getElementById("seconds");

    const count = "4 Dec 2020";

    const newcount = new Date(count);
    const currentDate = new Date();

    const totalSeconds = (newcount - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
      }
      setInterval(countdown, 1000);

    return(
        
    )
}