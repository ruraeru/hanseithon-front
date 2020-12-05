import React from 'react';
import styled from 'styled-components';
import backImg from './images/background1.png';
import backImg2 from './images/background3.png';
import Clock from './clock';
import Count from './count';


const Back = styled.div`
  background-image: url(${props => props.img || "none"});
  background-size: 100%;
`;


const Box = styled.div`
  width: auto;
  height: 900px;
  padding: 154px 305px ${props => props.img || "15px"};
  background-color: ${props => props.background || "rgba(0, 0, 0, 0.8)"};
  text-decoration: none;
  /* background-color: rgba(0, 0, 0, 0.8); */
  display: ${props => props.display};
  
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
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "25px"};
  top: ${props => props.top || "0px"};
  left: ${props => props.left || "0px"};
  bottom: ${props => props.bottom || "0px"};
  color: ${props => props.color || "#ffffff"};
  line-height: ${props => props.line || "34px"};
  text-decoration: none;
  
  display: flex;
  justify-content: center;
  text-align: ${props => props.align || "center"};
  position: ${props => props.position || "relative"};
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
  text-shadow: 3px 3px 20px rgba(255, 0, 104, 0.79);
  font-size: 97px;
  color: #f44e92;
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 97px;
  /* text-align: center; */
  /* position: relative; */
  /* top: -140px; */
`;

const Time = styled.text`
  width: 100%;
  text-shadow: 3px 3px 20px rgba(255, 255, 255, 0.8);
  font-family:"KoreanJMDBR";
  font-size: 104px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  text-align: center;
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

const TimeTable = styled.table`
  border: 1;
  border-color: solid black;
`;

function App() {
  return (
    <>
      <Back img={backImg}>
        <Box>
          <Text size="92px" height="217px" line="125px" color="#d15941" top="-130px">
            Welcome <br /> To Hanseithon
      </Text>
          <Text size="92px" height="0" line="125px" top="-347px" left="10px">
            Welcome <br /> To Hanseithon
      </Text>
          <Text top="-60px">
            ㅡ The Third Session of 2020 ㅡ
      </Text>
          <Iframe src="https://www.youtube-nocookie.com/embed/RYR6LeEK1hU?autoplay=1&mute=1" frameBorder="0" controlslist="nodownload" loop="1" allowFullScreen />
        </Box>
      </Back>
      <Back img={backImg2}>
        <Box>
          <CountDown>
            Count Down
          </CountDown>
          <Text line="165px">
            No sweat, no sweet
          </Text>
          <Time>
            <TimeText>현재시간</TimeText>
            <Clock />
          </Time>
          <Time>
            <TimeText>남은시간</TimeText>
            <Count />
          </Time>
        </Box>
      </Back>
      <Back img={backImg}>
        <Box background="rgba(54, 64, 94, 0.8)">
          <Text size="97px" line="132px" height="200px" top="-77px">
            Time table
          </Text>
          <Text height="100px" size="67px" line="67px" left="-300px">
            12월 11일(금) <br />
          </Text>
          <Text align="left" height="30px" left="-280px">
            <p>17:30 ~ 18:00 | 키노트 <br />
            18:00 ~ 20:00 | 자율 개발 <br />
            20:00 ~ 21:00 | 저녁 식사 및 멘토단 OT <br />
            21:00 ~ 21:30 | 이벤트 타임 <br />
            17:30 ~ 18:00 | 자율 개발 및 멘토링</p>
          </Text>
          <Text height="100px" size="67px" line="67px" left="300px" top="-132px">
            12월 12일(토) <br />
          </Text>
          <Text align="left" left="300px" top="-132px">
            <p>24:00 ~ 08:00 | 자율  <br/>
            08:00 ~ 09:00 | 아침 식사 <br/>
            09:00 ~ 09:30 | 이벤트 타임 <br/>
            09:30 ~ 12:30 | 자율 개발 및 멘토링 <br/>
            12:30 ~ 13:30 | 점심 식사 <br/>
            13:30 ~ 14:00 | 이벤트 타임 <br/>
            14:00 ~ 15:00 | 파일 제출 및 발표 준비 <br/>
            15:00 ~ 18:00 | 발표 및 심사 <br/>
            18:00 ~ 18:30 | 시상 </p>
          </Text>
          </Box>
      </Back>
      <Back img={backImg}>
        <Box background="rgba(255, 255, 255, 0.8)">
          <Text size="97px" color="#262626">
            file
          </Text>
        </Box>
      </Back>
    </>
  );
}

export default App;