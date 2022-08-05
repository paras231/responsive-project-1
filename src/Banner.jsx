import React from "react";
import kid from "./assets/kid.png";
import styled from "styled-components";

const MainDiv = styled.div`

`;

const Img = styled.img`
  width: 100%;
  @media (min-width:375px)  and (max-width:420px) {
    width: 100%;
    margin-top: 10vh;
  }
`;

const TextDiv = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  width: 20vw;
  
`;
const Text = styled.h1`
  color: white;
 
opacity: 50%
`;

const ParaDiv = styled.div`
  position: absolute;
    top: 44%;
    left: 10%;
    width: 30vw;
`;

const Paragraph = styled.p`
  color: white;
`;

const Button = styled.button`
color: white;
background-color: skyblue;
border-radius: 30px;
border: none;
position: absolute;
top: 55%;
left: 9%;
height: 9vh;
width: 15vw;
cursor: pointer;

@media (min-width:993px) and (max-width:1200px) {

}



`
const Banner = () => {
  return (
    <>
    
        <Img src={kid} alt="kid" />
      
      <TextDiv>
        <Text>Improve Your Skills with Katon</Text>
      </TextDiv>
      <ParaDiv>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          maiores suscipit culpa quia! Excepturi velit illum totam sint iste
          sunt.
        </Paragraph>
      </ParaDiv>
        <Button>Get Started</Button>
    </>
  );
};

export default Banner;
