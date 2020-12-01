import React from 'react';
import styled from 'styled-components';
import backImg from './images/background1.png';
import backImg2 from './images/background3.png';

const Back = styled.div`
  background-image: url(${props => props.img});
`


const FstBox = styled.div`
  width: auto;
  height: 655px;
  padding: 154px 305px 311px;
  background-color: ${props => props.background || ""};
  text-decoration: none;
  opacity: 0.9;
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
  width: 700px;
  height: 525px;
  border: none;
  display: block;
  margin: 0 auto;
  /* position: relative; */
`;

const CountDown = styled(Text)`
  font-family: "KoreanJMDBR";
  src: url("./fonts/KoreanJMDBR.ttf") format("ttf");
  width: 650px;
  height: 97px;
  text-shadow: 3px 3px 20px rgba(255, 0, 104, 0.79);
  font-size: 97px;
  color: #f44e92;
  margin: 0 auto;
  /* top: -80px; */
`;

<video tabindex="-1" class="video-stream html5-main-video" controlslist="nodownload" 
src="blob:https://www.youtube.com/e02101db-0e57-4329-8cb4-0c2d1c61f3f8" 
style="width: 974px; height: 548px; left: 0px; top: 0px;" loop=""></video>

function App() {
  return (
    <>
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
      <Iframe src="https://www.youtube-nocookie.com/embed/3FO5Yz4DpsA?autoplay=1&mute=1"  controlslist="nodownload" loop="1"/>
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
    </FstBox>
    </Back>
    </>
  );
}

export default App;
