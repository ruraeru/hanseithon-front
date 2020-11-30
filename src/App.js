import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 1920px;
  height: 1368px;
  background-color: ${props => props.color};
  background-image: url(./images/background1.png);
`;

const Line = styled.div`
  width: 12rem;
  height: 0;
  margin: 12.5px 20.5px 0 0;
  background-color: white;
`;

const Text = styled.text`
  font-family: "KoreanJMDBR";
  src: url("./fonts/KoreanJMDBR.ttf") format("ttf");
  color: #ffffff;
  font-size: 25px;
  line-height: 34px;
  width: 368px;
  height: 25px;
  margin: 0 20.5px;
  text-align: left;
`;

function App() {
  return (
    <>
    <Box>
      <Text>
        The Third Session of 2020
      </Text>
    </Box>
    <Box color="blue" />
    <Box color="red" /> 
    <Box color="orange" />
    </>
  );
}

export default App;
