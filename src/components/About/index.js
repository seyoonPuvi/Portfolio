import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  padding: 5rem 2rem;

  @media (min-width: 768px) {
    width: 49%;
  }
`;

const RightContainer = styled.div`
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  padding: 5rem 2rem;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Title = styled.h1`
  font-size: 12rem;
  color: #ffffff;
  font-family: "Catamaran", sans-serif;
  letter-spacing: 2px;

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 8rem;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 2rem;
  color: #8f9094;
  line-height: 1.5;
`;

const Highlight = styled.span`
  color: #3ccf91;
  font-weight: bold;
  text-transform: capitalize;
`;

const SubTitle = styled(Title)`
  color: black;
  letter-spacing: 1px;
`;

const SkillContainer = styled.ul`
  padding-inline-start: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem 2rem;
`;

const SkillList = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

const SkillListItem = styled.div`
  background-color: rgb(237, 242, 248);
  border-radius: 50%;
  height: 90px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillImage = styled.img`
  height: 50%;
  object-fit: contain;
  width: 50%;
`;

const SkillName = styled.p`
  color: #6b7688;
  font-size: 1.8rem;
`;

const ExperienceTitle = styled.h1`
  font-size: 4rem;
  color: white;
  font-family: "Oswald";
  font-weight: bold;
  letter-spacing: 2px;
  margin-top: 10rem;
`;

const Experience = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 3rem;
`;

const ExperienceHeading = styled.h2`
  color: #3ccf91;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 2rem;
`;

const ExperienceText = styled.p`
  font-size: 1.6rem;
  color: #8f9094;
`;

const ExperienceText2 = styled(ExperienceText)`
  font-size: 1.2rem;
`;

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <LeftContainer>
          <Title
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            About
          </Title>
          <Text
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            data-aos-delay="600"
          >
            I am a passionate <Highlight>software developer</Highlight>{" "}
            specializing in the <Highlight>MERN stack</Highlight>, with a strong
            emphasis on <Highlight>frontend development</Highlight>.I am
            dedicated to continuously learning and refining my skills to create
            engaging digital experiences that meet both user needs and business
            objectives.
          </Text>
          <ExperienceTitle
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            Experience
          </ExperienceTitle>
          <Experience
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <ExperienceHeading>Frontend Engineer Intern</ExperienceHeading>
            <ExperienceText>CodTech IT Solution</ExperienceText>
            <ExperienceText2>May 2024 – Present</ExperienceText2>
          </Experience>
          <Experience
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-delay="1100"
          >
            <ExperienceHeading>
              MERN Stack Development Programn
            </ExperienceHeading>
            <ExperienceText>NxTWave Academy</ExperienceText>
            <ExperienceText2>Aug 2023 – October 2024 </ExperienceText2>
          </Experience>
        </LeftContainer>
        <RightContainer>
          <SubTitle
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            Skills
          </SubTitle>
          <SkillContainer>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/tgsCK0QC/python.png" />
              </SkillListItem>
              <SkillName>Python</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/x1hWJ48c/js.png" />
              </SkillListItem>
              <SkillName>JavaScript</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/L6YsrGcs/physics.png" />
              </SkillListItem>
              <SkillName>React</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/t4FFHsK7/html-5.png" />
              </SkillListItem>
              <SkillName>Html5</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/tCcHHT30/css-3.png" />
              </SkillListItem>
              <SkillName>Css3</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/wTw4CGd7/nodejs.png" />
              </SkillListItem>
              <SkillName>NodeJS</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/GtP33sCh/Express.png" />
              </SkillListItem>
              <SkillName>ExpressJS</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/g0GVGvbr/MongoDB.png" />
              </SkillListItem>
              <SkillName>MongoDB</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="900"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/Qx09cv2N/SQLite.png" />
              </SkillListItem>
              <SkillName>Sqlite</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/cLWW4J9r/MySQL.png" />
              </SkillListItem>
              <SkillName>MySQL</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="1100"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/sDyHMZzd/Redux.png" />
              </SkillListItem>
              <SkillName>Redux</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="1200"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/rpcwbjXZ/Git.png" />
              </SkillListItem>
              <SkillName>Git</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="1300"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/CLz7BC22/GitHub.png" />
              </SkillListItem>
              <SkillName>GitHub</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="1400"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/k51FgBcC/AWS.png" />
              </SkillListItem>
              <SkillName>AWS</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="1500"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/m2mrqC2T/Bootstrap.png" />
              </SkillListItem>
              <SkillName>Bootstrap</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="1600"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/26WsdR31/Sass.png" />
              </SkillListItem>
              <SkillName>Sass</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="1700"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/d0Pm7bMH/Tailwind-CSS.png" />
              </SkillListItem>
              <SkillName>TailWind</SkillName>
            </SkillList>
            <SkillList
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="1800"
            >
              <SkillListItem>
                <SkillImage src="https://i.postimg.cc/9XKb9877/Figma.png" />
              </SkillListItem>
              <SkillName>Figma</SkillName>
            </SkillList>
          </SkillContainer>
        </RightContainer>
      </AboutContainer>
    </>
  );
};

export default About;
