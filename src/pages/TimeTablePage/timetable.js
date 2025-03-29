import React from 'react';
import styled from 'styled-components';
import backImg from '../../images/background1.png';
import TimeTableImg from '../../images/timetable.jpeg';

const Box = styled.div`
  width: auto;
  height: 800px;
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

function TimeTable() {
  return (
    <>
      <Back img={backImg}>
        <Box background="rgba(54, 64, 94, 0.8)">
          <Text size="97px" line="97px" height="200px" top="-77px">
            Time table
          </Text>
          {/* <Text height="100px" size="67px" line="67px" left="-300px">
            12월 11일(금) <br />
          </Text>
          <Text align="left" height="30px" left="-280px">
            <p>17:30 ~ 18:00 | 키노트 <br />
            18:00 ~ 20:00 | 자율 개발 <br />
            20:00 ~ 21:00 | 저녁 식사 및 멘토단 OT <br />
            21:00 ~ 21:30 | 이벤트 타임 <br />
            21:30 ~ 24:00 | 자율 개발 및 멘토링</p>
          </Text>
          <Text height="100px" size="67px" line="67px" left="300px" top="-132px">
            12월 12일(토) <br />
          </Text>
          <Text align="left" left="300px" top="-132px">
            <p>24:00 ~ 08:00 | 자율 개발 <br/>
            08:00 ~ 09:00 | 아침 식사 <br/>
            09:00 ~ 09:30 | 이벤트 타임 <br/>
            09:30 ~ 12:30 | 자율 개발 및 멘토링 <br/>
            12:30 ~ 13:30 | 점심 식사 <br/>
            13:30 ~ 14:00 | 이벤트 타임 <br/>
            14:00 ~ 15:00 | 파일 제출 및 발표 준비 <br/>
            15:00 ~ 18:00 | 발표 및 심사 <br/>
            18:00 ~ 18:30 | 시상 </p>
          </Text> */}
          <img src={TimeTableImg} width="100%" />
        </Box>
      </Back>
    </>
  )
}

export default TimeTable;