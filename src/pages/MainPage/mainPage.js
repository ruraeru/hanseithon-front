import React from 'react';
import styled from 'styled-components';
import backImg from '../../images/background1.png';


const Box = styled.div`
  width: auto;
  height: 900px;
  padding: 154px 305px ${props => props.img || "15px"};
  background-color: ${props => props.background || "rgba(0, 0, 0, 0.8)"};
  text-decoration: none;
  display: ${props => props.display};
`;

const Back = styled.div`
  background-image: url(${props => props.img || "none"});
  background-size: 100%;
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
  width: 100%;
  height: 525px;
  display: flex;
  justify-content: center;
`;

const Video = styled.video`
  width: 100%;
  height: 525px;
  display: flex;
  justify-content: center;
  background: black;
  border: none;
`;

function MainPage() {
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
          <Iframe src="https://www.youtube-nocookie.com/embed/_uBRNsHxIFk?autoplay=1&loop=1&autopause=0&mute=1" frameBorder="0" allow="autoplay" allowFullScreen />
        </Box>
      </Back>
    </>
  )
}

export default MainPage;