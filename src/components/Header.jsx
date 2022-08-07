import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import bg from "../assets/bg.png";
import group from "../assets/group.png";

const MainDiv = styled.div`
  display: flex;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 320px) and (max-width: 375px) {
    display:none;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display:none;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    display:none;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    display:none;
  }
`;

const LinkContent = styled.div`
   padding-left: 520px;
    padding-top: 20px;
   ul {
    list-style-type: none;
    display: flex;
    gap: 30px;
  }
  li{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
color: #FFFFFF;
cursor: pointer;
  }
`;
const Logo = styled.img`
    padding-top: 14px;
`;
const Header = () => {
  return (
    <>
      <MainDiv>
        <Logo src={logo} />
        <LinkContent>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>CALL FOR A CONSULTANT</li>
          </ul>
        </LinkContent>
      </MainDiv>
    </>
  );
};

export default Header;
