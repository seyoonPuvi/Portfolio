import { React, useState } from "react";
import { styled, keyframes } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

// Keyframes for animations
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  height: 5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
`;

const Navbar = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled.h1`
  font-weight: bold;
  font-style: italic;
  color: white;
  font-size: 5rem;
  font-family: "Londrina Shadow", sans-serif;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }

  @media (max-width: 600px) {
    font-size: 4rem;
  }
`;

const NavItemsContainer = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 2.5rem;
  padding-inline-start: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItems = styled.a`
  list-style-type: none;
  text-decoration: none;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  font-family: "Edu AU VIC WA NT Dots", serif;
  font-optical-sizing: auto;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`;

const HamburgerMenu = styled(GiHamburgerMenu)`
  font-size: 2rem;
  color: white;
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 3rem;
    z-index: 1001;
  }
`;

const CloseIcon = styled(AiOutlineClose)`
  font-size: 2rem;
  color: white;
  display: none;
  z-index: 1000;

  position: fixed;
  top: 2rem;
  right: 2rem;

  @media (max-width: 768px) {
    display: block;
    font-size: 3rem;
  }
`;

const MobNavContainer = styled.ul`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  align-items: stretch;
  padding-inline-start: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
`;

const MobNavItems = styled.li`
  list-style-type: none;
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};

  &.slide-in {
    animation: ${slideIn} ${(props) => props.duration} linear
      ${(props) => props.delay} both;
  }

  &.slide-out {
    animation: ${slideOut} ${(props) => props.duration} linear
      ${(props) => props.closeDelay} both;
  }
`;

const MobNavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 2rem;
  font-family: "Spicy Rice", serif;
  letter-spacing: 2px;
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`;

const Header = () => {
  AOS.init();
  const [showMobNav, setShowMobNav] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const onClickNavBtn = () => {
    if (showMobNav) {
      // Start closing animation
      setIsClosing(true);
      // Delay hiding the navigation until the animation finishes
      setTimeout(() => {
        setShowMobNav(false);
        setIsClosing(false); // Reset closing state
      }, 1400); // Match the animation duration
    } else {
      setShowMobNav(true);
    }
  };

  const onRenderMobileNav = () => (
    <MobNavContainer>
      <MobNavItems
        color="black"
        className={!isClosing ? "slide-in" : "slide-out"}
        duration="0.4s"
        delay="0.2s"
        closeDelay="1s"
        onClick={onClickNavBtn}
      >
        <MobNavLink href="#home">Home</MobNavLink>
      </MobNavItems>
      <MobNavItems
        color="#257180"
        className={!isClosing ? "slide-in" : "slide-out"}
        duration="0.4s"
        delay="0.4s"
        closeDelay="0.8s"
        onClick={onClickNavBtn}
      >
        <MobNavLink href="#service">Service</MobNavLink>
      </MobNavItems>
      <MobNavItems
        color="#912100 "
        className={!isClosing ? "slide-in" : "slide-out"}
        duration="0.4s"
        delay="0.6s"
        closeDelay="0.6s"
        onClick={onClickNavBtn}
      >
        <MobNavLink href="#project">Project</MobNavLink>
      </MobNavItems>
      <MobNavItems
        color="#FD8B51"
        className={!isClosing ? "slide-in" : "slide-out"}
        duration="0.4s"
        delay="0.8s"
        closeDelay="0.4s"
        onClick={onClickNavBtn}
      >
        <MobNavLink href="#about">About</MobNavLink>
      </MobNavItems>
      <MobNavItems
        color="#CB6040"
        className={!isClosing ? "slide-in" : "slide-out"}
        duration="0.4s"
        delay="1s"
        closeDelay="0.2s"
        onClick={onClickNavBtn}
      >
        <MobNavLink href="#contact">Contact</MobNavLink>
      </MobNavItems>
    </MobNavContainer>
  );

  return (
    <>
      <NavbarContainer>
        <Navbar>
          <NavLogo>{`<VK/>`}</NavLogo>
          <NavItemsContainer>
            <NavItems as="a" href="#Home">
              Home
            </NavItems>
            <NavItems as="a" href="#service">
              Service
            </NavItems>
            <NavItems as="a" href="#project">
              Project
            </NavItems>
            <NavItems as="a" href="#about">
              About
            </NavItems>
            <NavItems as="a" href="#contact">
              Contact
            </NavItems>
          </NavItemsContainer>
          {showMobNav ? (
            <CloseIcon onClick={onClickNavBtn} />
          ) : (
            <HamburgerMenu onClick={onClickNavBtn} />
          )}
        </Navbar>
      </NavbarContainer>
      {showMobNav && onRenderMobileNav()}
    </>
  );
};

export default Header;
