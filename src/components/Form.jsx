import React from "react";
import styled from "styled-components";
import bg from "../assets/bg.png";
import group from "../assets/group.png";
import vector from "../assets/vector.png";

const MainDiv = styled.div`
  height: 70vh;
  width: 100%;
  background: linear-gradient(180deg, #194d41 0%, rgba(25, 77, 65, 0.7) 100%),
    url(${group});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  @media (min-width: 320px) and (max-width: 375px) {
    display: grid;
    height: 130vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display: grid;
    height: 130vh;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    display: grid;
    height: 130vh;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    display: grid;
    height: 130vh;
  }
  @media (min-width: 561px) and (max-width: 640px) {
    display: grid;

    height: 130vh;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    display: grid;
    height: 130vh;
  }
`;

const StyledText = styled.h1`
  -webkit-text-stroke: 0.3px white;
  -webkit-text-fill-color: transparent;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 64px;
  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 34px;
    text-align: center;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    font-size: 34px;
    text-align: center;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    font-size: 34px;
    text-align: center;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    font-size: 34px;
    text-align: center;
  }
`;

const Intervention = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 64px;
  font-style: normal;
  font-family: "Montserrat";
  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 34px;
    text-align: center;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    font-size: 34px;
    text-align: center;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    font-size: 34px;
    text-align: center;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    font-size: 34px;
    text-align: center;
  }
  @media (min-width: 561px) and (max-width: 640px) {
    font-size: 34px;
    text-align: center;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    font-size: 34px;
    text-align: center;
  }
`;

const TextDiv = styled.div`
  display: grid;
  padding-left: 10%;
  padding-top: 10%;
  @media (min-width: 320px) and (max-width: 375px) {
    padding-left: 0%;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    padding-left: 0%;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    padding-left: 0%;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    padding-left: 0%;
  }
  @media (min-width: 561px) and (max-width: 640px) {
    padding-left: 3%;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    padding-left: 3%;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    padding-left: 3%;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    padding-left: 5%;
  }
`;
const ParaDiv = styled.div`
  width: 40vw;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 84vw;
    padding-left: 13%;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 84vw;
    padding-left: 13%;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    width: 84vw;
    padding-left: 13%;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    width: 84vw;
    padding-left: 13%;
  }
`;
const Para = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  color: rgba(255, 255, 255, 0.8);
`;

const FormDiv = styled.div`
  margin-top: 3%;
  margin-left: 5%;
  background: linear-gradient(180deg, #2a7d6c 0%, rgba(62, 105, 96, 0.62) 100%);
  height: 60vh;
  width: 38vw;
  text-align: center;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  @media (min-width: 320px) and (max-width: 375px) {
    height: 70vh;
    width: 75vw;
    margin-left: 12%;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    height: 70vh;
    width: 75vw;
    margin-left: 12%;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    height: 70vh;
    width: 75vw;
    margin-left: 12%;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    height: 70vh;
    width: 75vw;
    margin-left: 12%;
  }
`;
const InputDiv1 = styled.div`
  display: flex;
  margin-top: 4%;
  margin-left: 8%;
  gap: 15px;
  @media (min-width: 320px) and (max-width: 375px) {
    display: grid;
    justify-content: center;
    margin-left: 0%;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display: grid;
    justify-content: center;
    margin-left: 0%;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    display: grid;
    justify-content: center;
    margin-left: 0%;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    display: grid;
    justify-content: center;
    margin-left: 0%;
  }
`;

const Select = styled.select`
  box-sizing: border-box;
  margin-top: 4%;
  width: 31.3vw;
  height: 7vh;
  color: rgba(255, 255, 255, 0.7);
  margin-right: 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  background: linear-gradient(180deg, #2a7d6c 0%, rgba(62, 105, 96, 0.62) 100%);
  @media (min-width: 320px) and (max-width: 375px) {
    width: 60vw;
    margin-right: 0px;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 60vw;
    margin-right: 0px;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    width: 60vw;
    margin-right: 0px;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    width: 60vw;
    margin-right: 0px;
  }
  @media (min-width: 561px) and (max-width: 640px) {
    width: 60vw;
    margin-right: 0px;
  }
  @media (min-width: 641px) and (max-width: 768px) {
    width: 60vw;
    margin-right: 0px;
  }
`;

const StyledInput = styled.input`
  background: linear-gradient(180deg, #2a7d6c 0%, rgba(62, 105, 96, 0.62) 100%);
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.12);
  color: rgba(255, 255, 255, 0.7);
  height: 7vh;
  width: 15vw;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.7);
    padding-left: 14px;
  }

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  @media (min-width: 320px) and (max-width: 375px) {
    height: 7vh;
    width: 60vw;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    height: 7vh;
    width: 60vw;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    height: 7vh;
    width: 60vw;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    height: 7vh;
    width: 60vw;
  }
`;

const Button = styled.button`
  background: #5bc8af;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  width: 15vw;
  height: 8vh;
  margin-top: 3%;
  outline: none;
  border: none;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 35vw;
    height: 6vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 35vw;
    height: 6vh;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    width: 35vw;
    height: 6vh;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    width: 35vw;
    height: 6vh;
  }
`;
const Icon = styled.img`
  width: 18px;
  height: 16px;
  margin-right: 10px;
  margin-top: 7px;
`;
const Form = () => {
  return (
    <>
      <MainDiv>
        <TextDiv>
          <StyledText>GET AN</StyledText>
          <Intervention>INTERVENTION</Intervention>
          <ParaDiv>
            <Para>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </Para>
          </ParaDiv>
        </TextDiv>
        <FormDiv>
          <h1
            style={{
              color: " #FFFFFF",
              fontSize: "28px",
              fontWeight: "700",
              marginTop: "5vh",
            }}
          >
            Contact Us
          </h1>
          <InputDiv1>
            <StyledInput type="text" placeholder="First Name" />
            <StyledInput type="text" placeholder="First Name" />
          </InputDiv1>
          <InputDiv1>
            <StyledInput type="text" placeholder="Business Email" />
            <StyledInput type="text" placeholder="Company" />
          </InputDiv1>
          <Select>
            <option value="volvo">Country</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </Select>

          <Button>
            <Icon src={vector} />
            Submit
          </Button>
        </FormDiv>
      </MainDiv>
    </>
  );
};

export default Form;
