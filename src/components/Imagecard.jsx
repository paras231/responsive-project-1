import React from 'react'
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import styled from 'styled-components'


const MainDiv = styled.div`
 display: flex;
 justify-content: center;
    align-items: center;
 margin-top: 10vh;
 gap: 30px;
 @media (min-width: 320px) and (max-width: 375px) {
    display:none
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display:none
  }
  @media (min-width: 421px) and (max-width: 480px) {
    display:none
  }
  @media (min-width: 481px) and (max-width: 560px) {
    display:none
  }
`
const Image = styled.img`
width:25vw;
height:25vh;
border-radius: 8px;
`
const Imagecard = () => {
  return (
    <>
    <center>
  <MainDiv>
    <Image src={one} />
    <Image src={two} />
    <Image src={three} />
  </MainDiv>
  </center>
    </>
  )
}

export default Imagecard