import React from "react";
import styled from "styled-components";
import { AppBar } from "@mui/material";

const Header = () => {
  const MainDiv = styled.nav`
    display: flex;
    background-color: blueviolet;
    height: 10vh;

    width: 100%;
  `;
  const LinkContent = styled.div`
    @media (min-width: 993px) and (max-width: 1024px) {
      padding-left: 370px;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
      padding-left: 630px;
    }
    @media (min-width: 1281px) and (max-width: 1400px) {
      padding-left: 730px;
    }
    @media (min-width: 1401px) and (max-width: 1600px) {
      padding-left: 830px;
    }
    @media (min-width: 1601px) and (max-width: 1920px) {
      padding-left: 1200px;
    }
    margin-top: 30px;
    ul {
      list-style-type: none;
      display: flex;
      gap: 30px;
    }
    ul > li {
      cursor: pointer;
    }
  `;
  const LogoContent = styled.div`
    padding-left: 20px;
    padding-top: 20px;
  `;

  return (
    <>
      <AppBar>
        <MainDiv>
          <LogoContent>
            <h1>Logo</h1>
          </LogoContent>
          <LinkContent>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Login</li>
              <li>Signup</li>
              <li>Welcome To Katon</li>
            </ul>
          </LinkContent>
        </MainDiv>
      </AppBar>
    </>
  );
};

export default Header;
