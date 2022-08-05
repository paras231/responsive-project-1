import React from "react";
import ladki from "./assets/ladki.png";
import styled from "styled-components";

const MainDiv = styled.div`
  margin-top: 10vh;
`;

const About = () => {
  return (
    <>
      <MainDiv>
        <img src={ladki} />
      </MainDiv>
    </>
  );
};

export default About;
