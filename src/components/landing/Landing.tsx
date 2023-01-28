import Lottie from "lottie-react";
import React from "react";
import styled from "styled-components";
import love from "../../assets/love.json";
import wd from "../../assets/wd.jpg";

const Landing = () => {
  return (
    <LandingBody>
      <Overlay />
      <LandingTitle>
        <span>
          Ci sposiamo! <br /> Micaela & Lorenzo
        </span>
        <Lottie
          animationData={love}
          style={{
            width: "160px",
          }}
        />
      </LandingTitle>
      <WeddingImage
        style={{
          backgroundImage: `url(${wd})`,
        }}
      />
    </LandingBody>
  );
};

export default Landing;

const LandingBody = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Overlay = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: #00000020;
  z-index: 1;
`;

const WeddingImage = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const LandingTitle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Dancing", serif;
  text-align: center;
  font-size: 5rem;
  line-height: 5.6rem;
  color: #e8e1d7;
  text-shadow: 0px 0px 5px black;
  position: absolute;
  margin: 0;
  z-index: 2;
  left: 10vw;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
