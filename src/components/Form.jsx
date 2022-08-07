import React from 'react'
import styled from "styled-components";
import bg from "../assets/bg.png";
import group from "../assets/group.png";


const MainDiv = styled.div`
height: 50vh;
width: 100%;
background-image: url(${bg});

`
const Form = () => {
  return (
   <>
   <MainDiv>
   <h1>GET AN INTERVEN</h1>
   </MainDiv>
   
   </>
  )
}

export default Form