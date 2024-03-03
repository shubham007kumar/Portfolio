/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { Box, Container, SubContainer } from "./TechStyle";

const list = [
  <img
    src="https://img.icons8.com/color/52/000000/html-5--v1.png"
    alt="blank"
  />,
  <img src="https://img.icons8.com/color/48/000000/css3.png" alt="blank" />,
  <img
    src="https://img.icons8.com/color/48/000000/javascript--v1.png"
    alt="blank"
  />,
  <img src="https://img.icons8.com/officel/48/000000/react.png" alt="blank" />,
  <img src="https://img.icons8.com/color/48/000000/redux.png" alt="blank" />,
  <img
    src="https://img.icons8.com/color/48/000000/material-ui.png"
    alt="blank"
  />,
  <img
    src="https://img.icons8.com/color/48/000000/bootstrap.png"
    alt="blank"
  />,
  <img src="https://img.icons8.com/color/48/000000/git.png" alt="blank" />,
  <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="blank" />,
  <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="blank" />,
  <img src="https://img.icons8.com/color/48/000000/heroku.png" alt="blank" />,
  <img
    src="https://img.icons8.com/color/48/000000/typescript.png"
    alt="blank"
  />,
];

export const TechStack = () => {
  return (
    <div id="skill">
      <Container>
        <h1 className="hea">Some Technologies I've Worked With</h1>
        <SubContainer>
          {list.map((item, index) => (
            <Box key={index}>{item}</Box>
          ))}
        </SubContainer>
      </Container>
    </div>
  );
};
