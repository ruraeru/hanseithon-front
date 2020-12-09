import React from 'react';
import styled from 'styled-components';
import backImg2 from '../../images/background3.png';
import Count from './count';

const Time = styled.text`
  width: 100%;
  text-shadow: 3px 3px 20px rgba(255, 255, 255, 0.8);
  font-family:"KoreanJMDBR";
  font-size: 154px;
  line-height: 154px;
  color: #ffffff;
  /* position: relative; */
  /* left: -5rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TimeText = styled.text`
  width: 100%;
  font-family: "KoreanJMDBR";
  font-size: 30px;
  line-height: 30px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  text-shadow: none;
  /* margin-right: 2rem; */
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

const CountDownText = styled(Text)`
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

const Back = styled.div`
  background-image: url(${props => props.img || "none"});
  background-size: 100%;
`;

function CountDown() {
    return (
        <>
            <Back img={backImg2}>
        <Box>
          <CountDown>
            Count Down
          </CountDown>
          <Text line="165px">
            No sweat, no sweet
          </Text>
          {/* <Time>
            <TimeText>현재시간</TimeText>
            <Clock />
          </Time> */}
          <Time>
            <TimeText>남은시간</TimeText>
            <Count />
          </Time>
        </Box>
      </Back>
        </>
    )
}

export default CountDown;