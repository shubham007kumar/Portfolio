/* eslint-disable react/no-unescaped-entities */
import { Container, Div1, Img, Sub1, Sub2 } from "./AboutmeStyle";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import Button from "@mui/material/Button";

export const AboutMe = ({ them }) => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `Resume.pdf`;
    link.href = "Resume.pdf";
    link.click();
  };
  return (
    <div id="about">
      <Container>
        <div>
          {" "}
          <h1 style={{ fontSize: "3rem" }}>About Me</h1>
        </div>
        <Sub1>
          <Sub2>
            <Div1>
              Hello! My name is Shubham kumar and I'm Web Developer located in
              India. Well-organised person, problem solver,Interested in the
              entire frontend spectrum and working on ambitious projects with
              positive people.
            </Div1>
            <Button
              onClick={onDownload}
              variant="contained"
              className={them ? "" : ""}
              endIcon={<SystemUpdateAltIcon />}
            >
              Resume
            </Button>
          </Sub2>
          <Img src="IMG_20211120_141016_817.jpg" alt="blank" />
        </Sub1>
      </Container>
    </div>
  );
};
