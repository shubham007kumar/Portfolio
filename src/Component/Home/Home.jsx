import { useEffect, useState } from "react";
import { About } from "../About/About";
import { AboutMe } from "../Aboutme/AboutMe";
import { Project } from "../ProjectPage/Project";

import { Contact } from "../Contact/Contact";
import { Route, Switch } from "react-router-dom";
import { TechStack } from "../Tech/TechStack";
export const Home = () => {
  const [offsetY, setoffsetY] = useState(0);
  const handleScroll = () => {
    setoffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <About style={{ transform: `translateY(${offsetY * 0.6}px)` }} />
      <AboutMe style={{ transform: `translateY(${offsetY * 0.4}px)` }} />
      <Project style={{ transform: `translateY(${offsetY * 0.2}px)` }} />
      <TechStack />
      <Contact />
      <Switch>
        <Route path="/">
          <AboutMe />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/skill">
          <TechStack />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
};
