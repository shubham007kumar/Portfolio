import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Contaier, One, Two, Btn } from "./AboutStyle";
import Typewriter from "typewriter-effect";
import Button from "@mui/material/Button";

export const About = () => {
  return (
    <div>
      <Contaier>
        <One>
          <a
            href="https://www.linkedin.com/in/shubham-kumar-3a3b04163/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            {" "}
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/shubham007kumar/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            {" "}
            <GitHubIcon />{" "}
          </a>
          <a
            href="https://twitter.com/Shubham83056639"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit" }}
          >
            {" "}
            <TwitterIcon />
          </a>
        </One>
        <Two>
          <h4>Hi, my name is</h4>
          <Typewriter
            options={{
              strings: ["Shubham Kumar"],
              autoStart: true,
              loop: true,
              delay: 100,
              wrapperClassName: "typo",
              cursorClassName: "cur",
              pauseFor: 2000,
            }}
          />
          <h3 className="Hea">I build thing for the web</h3>
          <p className="para">
            I'm a Full Stack Web Developer Try in building User experiences
            product. Currently, I'm focused on building accessible,
            human-centered products.
          </p>
          <a
            href="mailto:yuvraj.shubham.ss@gmail.com"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Button size="small" variant="outlined">
              Contact me!
            </Button>
          </a>
        </Two>
      </Contaier>
    </div>
  );
};
