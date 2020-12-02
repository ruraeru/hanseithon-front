import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Clock1 = (props) => {
  // const APIHOST = "http://chunwol.xyz:8000/timer/endtime";

  let time = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit', second:'2-digit'});

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit', second:'2-digit'});
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);
  return (
    <>
      <p> {ctime} </p>
    </>
  )
}

export default Clock1;