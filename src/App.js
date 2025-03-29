import React from 'react';
import styled from 'styled-components';
import backImg2 from './images/background3.png';
import MainPage from './pages/MainPage/mainPage';
import Count from './pages/CountPage/count';
import TimeTable from './pages/TimeTablePage/timetable';
import Upload from './pages/UploadPage/uploadPage';

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
  display: flex;
  align-items: center;
  line-height: 132px;
`;

const Time = styled.text`
  width: 100%;
  height: 100%;
  text-shadow: 3px 3px 20px rgba(255, 255, 255, 0.8);
  font-family:"KoreanJMDBR";
  font-size: 140px;
  line-height: 140px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

function App() {
  return (
    <>
      <MainPage />
      <Back img={backImg2}>
        <Box>
          <CountDownText>
            Count Down
          </CountDownText>
          <Text line="160px" size="29px">
            No sweat, no sweet
          </Text>
          <Time>
            <Count />
          </Time>
        </Box>
      </Back >
      <TimeTable />
      <Upload />
    </>
  );
}

export default App;