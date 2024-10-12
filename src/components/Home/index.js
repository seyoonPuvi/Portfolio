import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import ParticlesComponent from "../partcles";

const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GreetText = styled.p`
  font-size: 4rem;
  font-family: "Satisfy", cursive;
  font-weight: bold;
  color: #ba299b;
  padding-left: 1rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    font-size: 3rem;
  }
`;

const Name = styled.h1`
  font-size: 10rem;
  font-weight: bold;
  color: #e86807;
  text-align: center;
  padding-left: 5rem;
  font-family: "Oswald", serif;
  letter-spacing: 2px;

  @media (max-width: 600px) {
    font-size: 3rem;
    padding-left: 3rem;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    font-size: 5rem;
  }
`;

const SkillText = styled.h2`
  font-size: 5rem;
  color: #e86807;
  font-weight: bold;
  text-align: center;
  font-family: "Oswald", serif;
  letter-spacing: 2px;

  @media (max-width: 600px) {
    font-size: 3rem;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    font-size: 4rem;
  }
`;

const AboutText = styled.h2`
  color: white;
  font-size: 5rem;
  text-align: center;
  font-family: "Oswald", serif;
  letter-spacing: 2px;

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (min-width: 600px) and (max-width: 1000px) {
    font-size: 3rem;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
`;

const Home = () => {
  AOS.init();

  return (
    <>
      <HomeContainer id="home">
        <ParticlesComponent id="particles" />
        <MainContainer>
          <GreetText
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            Hey there!,I'm-
          </GreetText>
          <Name
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="800"
          >
            Vignesh Pugazhenthi
          </Name>
          <AboutText
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1200"
          >
            Full Stack Developer who likes building stuff for
          </AboutText>
          <SkillText
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1500"
          >
            Web
          </SkillText>
        </MainContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
