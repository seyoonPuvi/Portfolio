import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceContainer = styled.div`
  min-height: 100vh;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  background-color: #ff3822;

  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  padding: 5rem 2rem;

  @media (min-width: 768px) {
    width: 50%;
    min-height: 100vh;
  }
`;

const Title = styled.h1`
  font-size: 12rem;
  color: #ffffff;
  font-family: "Catamaran", sans-serif;
  letter-spacing: 2px;

  transition: all 0.45s ease-out;

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 8rem;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
    text-align: center;
  }
`;

const Heading = styled.h1`
  font-size: 10rem;
  font-family: "Oswald";
  letter-spacing: 1px;
  white-space: normal;
  word-break: normal;
  overflow-wrap: anywhere;
  line-height: 1.2;

  transition: all 0.45s ease-out;

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 8rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
  }
`;

const ServiceCardContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
  padding: 5rem 3rem;

  @media (min-width: 768px) {
    width: 50%;
    min-height: 100vh;
  }

  @media (max-width: 768px) {
    padding: 5rem 1rem;
  }
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  font-family: "Catamaran", sans-serif;
  font-optical-sizing: auto;
  min-width: 30rem;
  flex-grow: 1;
`;
const Image = styled.img`
  height: 10rem;
  width: 10rem;
  object-fit: contain;
  object-position: center;

  @media (max-width: 768px) {
    height: 8rem;
    width: 8rem;
    align-self: center;
  }
`;

const CardHeading = styled.h1`
  font-size: 4rem;
  font-weight: bold;

  @media (min-width: 768px) and (max-width: 900px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
  }
`;

const CardDesc = styled.p`
  font-size: 2rem;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const CardListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding-inline-start: 2rem;
`;

const CardListItem = styled.li`
  font-size: 1.6rem;
  font-weight: bold;
`;

const Service = () => {
  AOS.init();
  return (
    <ServiceContainer id="service">
      <LeftContainer>
        <Title data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="300">
          SERVICES
        </Title>
        <Heading
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          data-aos-delay="600"
        >
          Code that solves problems,one product at a time
        </Heading>
      </LeftContainer>
      <ServiceCardContainer>
        <ServiceCard
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Image src="https://cdn.sanity.io/images/y1prohws/production/1ee2839d9f4f3d19a08d9160d4b464a3dcedfb25-70x65.svg" />
          <CardHeading>What I can do for you</CardHeading>
          <CardDesc>
            Deliver faster, better products that your users will love. Here are
            the services I provide:
          </CardDesc>
          <CardListContainer>
            <CardListItem>Design Strategy</CardListItem>
            <CardListItem>Web and Mobile App Design</CardListItem>
            <CardListItem>Front-end Development</CardListItem>
            <CardListItem>Back-end Development</CardListItem>
            <CardListItem>Fullstack Development</CardListItem>
          </CardListContainer>
        </ServiceCard>
        <ServiceCard
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Image src="https://cdn.sanity.io/images/y1prohws/production/08fc9d4b10ecaedd883306ecaaee37cc95651127-85x84.svg" />
          <CardHeading>Applications I'm fluent in</CardHeading>
          <CardDesc>
            Every designer needs the right tools to craft the perfect product.
            Thankfully, I'm proficient in multiple platforms:
          </CardDesc>
          <CardListContainer>
            <CardListItem>Figma</CardListItem>
            <CardListItem>Canvas</CardListItem>
          </CardListContainer>
        </ServiceCard>
        <ServiceCard
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <Image src="https://cdn.sanity.io/images/y1prohws/production/167e91631a7731d5a4301f798b8444131b08dad1-69x68.svg" />
          <CardHeading>What you can expect</CardHeading>
          <CardDesc>
            I design products that go beyond aesthetics—they're shippable and
            usable:
          </CardDesc>
          <CardListContainer>
            <CardListItem>
              Clean and Functional: Intuitive designs that prioritize
              functionality.
            </CardListItem>
            <CardListItem>
              Device and User Friendly: Seamless experiences across all devices.
            </CardListItem>
            <CardListItem>
              Efficient and Maintainable: Code that is easy to manage and scale.
            </CardListItem>
          </CardListContainer>
        </ServiceCard>
      </ServiceCardContainer>
    </ServiceContainer>
  );
};

export default Service;
