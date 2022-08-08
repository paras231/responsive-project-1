import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import bg from "../assets/bg.png";
import group from "../assets/group.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Drawernav from "./Drawernav";

const MainDiv = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const LinkContent = styled.div`
  padding-left: 520px;
  padding-top: 20px;
  ul {
    list-style-type: none;
    display: flex;
    gap: 30px;
  }
  li {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #ffffff;
    cursor: pointer;
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    padding-left: 220px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    padding-left: 480px;
  }
  @media (min-width: 1440px) and (max-width: 1540px) {
    padding-left: 660px;
  }
  @media (min-width: 1541px) and (max-width: 1680px) {
    padding-left: 790px;
  }
`;
const Logo = styled.img`
  padding-top: 14px;
  padding-left: 20px;
`;
const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMobile ? (
        <MainDiv>
          <Drawernav />
        </MainDiv>
      ) : (
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
      )}
    </>
  );
};

export default Header;
