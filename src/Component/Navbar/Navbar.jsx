import { useState } from "react";
import {
  ContainerOne,
  ContainerThree,
  ContainerTwo,
  NavContainer,
  H4,
  ContainerFour,
} from "./NavbarStyle";
import PropTypes from "prop-types";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Button from "@mui/material/Button";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import { About } from "../About/About";
import { AboutMe } from "../Aboutme/AboutMe";
import { Project } from "../ProjectPage/Project";
import { Contact } from "../Contact/Contact";

import styles from "./navbar.module.css";
import { Link, Element } from "react-scroll";

import { TechStack } from "../Tech/TechStack";

export const Navbar = ({ them, handleToggle }) => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleChange = () => {
    setToggle((pre) => !pre);
  };

  const changeBack = () => {
    if (window.scrollY >= 115) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBack);

  return (
    <>
      <NavContainer className={navbar ? styles.active : styles.nav}>
        <ContainerOne>
          <h2>Shubham</h2>
        </ContainerOne>
        <ContainerTwo>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={700}
            duration={500}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h4>About</h4>
          </Link>
          <Link
            to="project"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={1300}
            duration={500}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h4>Projects</h4>{" "}
          </Link>
          <Link
            to="skill"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={3200}
            duration={500}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h4>Skills</h4>
          </Link>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h4>Contact</h4>
          </Link>
          <Button onClick={handleToggle}>
            {them ? (
              <NightsStayIcon style={{ color: "black" }} />
            ) : (
              <WbSunnyIcon style={{ color: "white" }} />
            )}
          </Button>
        </ContainerTwo>
        <ContainerThree>
          <Button onClick={handleToggle}>
            {them ? <NightsStayIcon /> : <WbSunnyIcon />}
          </Button>
        </ContainerThree>
      </NavContainer>
      <ContainerFour className={toggle ? "show" : "hide"}>
        <div>
          <Element name="about" className="element">
            {" "}
            <H4 onClick={() => setToggle((pre) => !pre)}>About</H4>
          </Element>{" "}
        </div>
        <div>
          <Element name="project" className="element">
            {" "}
            <H4 onClick={() => setToggle((pre) => !pre)}>Projects</H4>
          </Element>
        </div>
        <div>
          <Element name="skill" className="element">
            {" "}
            <H4 onClick={() => setToggle((pre) => !pre)}>Skills</H4>
          </Element>
        </div>
        <div>
          <Element name="contact" className="element">
            {" "}
            <H4 onClick={() => setToggle((pre) => !pre)}>Contact</H4>
          </Element>
        </div>
      </ContainerFour>
      <About />
      <AboutMe them={them} />
      <Project />
      <TechStack />
      <Contact />
    </>
  );
};

Navbar.propTypes = {
  them: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
