import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Clock1 = (props) => {
  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get(`http://chunwol.xyz:8000/timer/endtime`);
      console.log(response.data);
    };
    apiCall();
  }, [])

  let time = new Date().toLocaleTimeString('it-IT');

  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString('it-IT');
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