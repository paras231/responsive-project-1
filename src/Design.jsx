import React from "react";
import girl from "./assets/girlreading.png";
import boy from "./assets/boyreading.png";
import styled from "styled-components";

import red from "./assets/red.png";

const MainDiv = styled.div`
  margin-top: 10vh;
`;

const RedImage = styled.img`
  width: 20vw;
  height: 20vh;
  position: absolute;
  left: 20%;
`;

const GirlImage = styled.img`
  width: 20vw;
  height: 20vh;
  position: absolute;
  left: 20.5%;
  margin-top: 7px;
`;
const BoyImage = styled.img`
  @media (min-width: 370px) and (max-width: 420px) {
    width: 11vw;
    height: 13vh;
    position: absolute;
    left: 33%;
    margin-top: 5.5rem;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    width: 11vw;
    height: 13vh;
    position: absolute;
    left: 33%;
    margin-top: 1.5rem;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    width: 11vw;
    height: 13vh;
    position: absolute;
    left: 33%;
    margin-top: 1.5rem;
  }
  @media (min-width: 561px) and (max-width: 640px) {
    width: 11vw;
    height: 13vh;
    position: absolute;
    left: 33%;
    margin-top: 1.5rem;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 11vw;
    height: 13vh;
    position: absolute;
    left: 33%;
    margin-top: 1.5rem;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    width: 11vw;
    height: 13vh;
    position: absolute;
    left: 33%;
    margin-top: 4.7rem;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 11vw;
    height: 13vh;
    position: absolute;
    left: 33%;
    margin-top: 7.4rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 11vw;
    height: 13vh;
    position: absolute;
    left: 33%;
    margin-top: 5.4rem;
  }
  @media (min-width: 1281px) and (max-width: 1370px) {
    width: 11vw;
    height: 13vh;
    position: absolute;
    left: 33%;
    margin-top: 5.4rem;
  }
  @media (min-width: 1371px) and (max-width: 1440px) {
    width: 11vw;
    height: 13vh;
    position: absolute;
    left: 33%;
    margin-top: 6.4rem;
  }
  @media (min-width: 1441px) and (max-width: 1540px) {
    width: 11vw;
    height: 13vh;
    position: absolute;
    left: 33%;
    margin-top: 7.4rem;
  }
  @media (min-width: 1541px) and (max-width: 1680px) {
    width: 11vw;
    height: 13vh;
    position: absolute;
    left: 33%;
    margin-top: 7.4rem;
  }
`;
const Design = () => {
  return (
    <>
      <MainDiv>
        <RedImage src={red} />

        <GirlImage src={girl} />
        <BoyImage src={boy} />
      </MainDiv>
    </>
  );
};

export default Design;
