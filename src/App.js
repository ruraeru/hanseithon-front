import React from 'react';
import styled from 'styled-components';
import backImg from './images/background1.png';
import backImg2 from './images/background3.png';
import Clock from './clock';
import Countdown from 'react-countdown-clock';


const Back = styled.div`
  background-image: url(${props => props.img || "none"});
`;


const FstBox = styled.div`
  width: auto;
  height: auto;
  padding: 154px 305px 311px;
  /* background-color: ${props => props.background || ""}; */
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Could = styled.div`
    border-radius: 13rem 13rem 0 0;
    width: 420px;
    height: 210px;
    background-image: linear-gradient(to bottom, #01fdfe, #017f7f);
`;

const Text = styled.text`
  font-family: "KoreanJMDBR";
  src: url("./fonts/KoreanJMDBR.ttf") format("ttf");
  font-size: ${props => props.size || "25px"};

  color: black;
  width: 100%;
  height: ${props => props.height || "25px"};
  top: ${props => props.top || "0px"};
  left: ${props => props.left || "0px"};
  color: ${props => props.color || "#ffffff"};
  line-height: ${props => props.line || "34px"};
  text-decoration: none;
  
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
`;

const Iframe = styled.iframe`
  /* width: 700px; */
  width: 100%;
  height: 525px;
  /* display: block; */
  /* margin: 0 auto; */
  /* position: relative; */
  display: flex;
  justify-content: center;

`;

const CountDown = styled(Text)`
  font-family: "KoreanJMDBR";
  src: url("./fonts/KoreanJMDBR.ttf") format("ttf");
  width: 100%;
  height: 200px;
  text-shadow: 3px 3px 20px rgba(255, 0, 104, 0.79);
  font-size: 97px;
  color: #f44e92;
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 97px;
  /* text-align: center; */
  position: relative;
  top: -80px;
`;

const Time = styled.text`
  width: 100%;
  text-shadow: 3px 3px 20px rgba(255, 255, 255, 0.8);
  font-family:"KoreanJMDBR";
  font-size: 104px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  position: relative;
  left: -5rem;
`;

const TimeText = styled.text`
  width: 100%;
  font-family: "KoreanJMDBR";
  font-size: 104px;
  line-height: 104px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: none;
  margin-right: 2rem;
`;

function App() {
  return (
    <div>
    <Back img={backImg}>
    <FstBox background="#262626">
      <Text size="92px" height="217px" line="125px" color="#d15941" top="-130px">
        Welcome <br /> To Hanseithon
      </Text>
      <Text size="92px" height="0" line="125px" top="-347px" left="10px">
        Welcome <br /> To Hanseithon
      </Text>
      <Text top="-60px">
        ㅡ The Third Session of 2020 ㅡ
      </Text>
      <Iframe src="https://www.youtube-nocookie.com/embed/RYR6LeEK1hU?autoplay=1&mute=1" frameBorder="0" controlslist="nodownload" loop="1" allowFullScreen/>
    </FstBox>
    </Back>
    <Back img={backImg2}>
    <FstBox background="#262626">
      <CountDown>
        Count Down
      </CountDown>
      <Text>
        No sweat, no sweet
      </Text>
      {/* <Countdown seconds={86400} color="#f44e92" alpha={2} size={300} font="KoreanJMDBR" /> */}
      <Time>
        <TimeText>현재시간</TimeText>
        <Clock />
      </Time>
      <Time>
        <TimeText>남은시간</TimeText>
        <Clock />
      </Time>
    </FstBox>
    </Back>
    </div>
  );
}

export default App;