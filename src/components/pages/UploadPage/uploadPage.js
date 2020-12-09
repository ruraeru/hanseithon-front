import React from 'react';
import styled from 'styled-components';
import backImg from '../../../images/background1.png';
import Upload from './fileupload';
import Modal from '../../Modal';

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
`;

function FileUpload() {
  return (
    <>
      <Back img={backImg}>
        <Box background="rgba(255, 255, 255, 0.8)">
          <Text size="97px" color="#262626" line="97px">
            file
          </Text>
          <br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br />
          <Text>
            <Modal />
          </Text>
        </Box>
      </Back>
    </>
  )
}

export default FileUpload;