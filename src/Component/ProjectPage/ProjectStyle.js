import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 25vh;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding-left: 4rem;
  .build {
    margin-left: 1rem;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 0px;
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    padding-left: 0rem;
    .build {
      margin-left: 1.5rem;
    }
  }
`;

export const Sub1 = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 90%;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;
  border-radius: 10px;
  padding: 1rem 0rem;
  :hover {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  @media screen and (max-width: 500px) {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    width: 90%;
    margin: auto;
    display: block;
    border-radius: 10px;
    padding: 1rem 0rem;
  }
  :hover {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;
export const Img = styled.img`
  width: 420px;
  margin-left: 2rem;
  margin-top: 0.5rem;
  border-radius: 5px;
  opacity: 0.5;
  transition: 0.5s ease-out;
  transform: scale(1);
  :hover {
    opacity: 1;
    transform: scale(1.01);
  }

  @media screen and (max-width: 500px) {
    width: 75%;
    margin-left: 3rem;
    margin-top: 0.5rem;
    border-radius: 5px;
    opacity: 0.5;
    transition: 0.5s ease-out;
    transform: scale(1);
    :hover {
      opacity: 1;
      transform: scale(1.01);
    }
  }
`;

export const Sub2 = styled.div`
  text-align: end;
  margin-right: 2rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  @media screen and (max-width: 500px) {
    text-align: start;
    margin-left: 3rem;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
`;

export const Sub3 = styled.div`
  text-align: start;
  padding: 1rem 0rem 1rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;

  @media screen and (max-width: 500px) {
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 10px;
  }
`;

export const Sub4 = styled.div`
  display: flex;
  column-gap: 0.5rem;
  justify-content: flex-end;

  @media screen and (max-width: 500px) {
    display: flex;
    column-gap: 0.5rem;
    justify-content: flex-start;
  }
`;
export const Sub5 = styled.div`
  display: flex;
  column-gap: 1rem;
  justify-content: flex-end;

  @media screen and (max-width: 500px) {
    display: flex;
    column-gap: 1rem;
    justify-content: flex-start;
  }
`;
//------ second box ------------

export const Sub6 = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;
  border-radius: 10px;
  padding: 1rem 0rem;
  :hover {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  @media screen and (max-width: 500px) {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 1rem 0rem;
  }
  :hover {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;

export const Sub7 = styled.div`
  text-align: start;
  margin-left: 2rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  @media screen and (max-width: 500px) {
    text-align: start;
    margin-left: 3rem;
    order: 2;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
`;

export const Sub8 = styled.div`
  display: flex;
  column-gap: 0.5rem;
  justify-content: flex-start;
`;

export const Sub9 = styled.div`
  display: flex;
  column-gap: 1rem;
  justify-content: flex-start;
`;

export const Img2 = styled.img`
  width: 420px;
  margin-right: 2rem;
  margin-top: 0.5rem;
  border-radius: 5px;
  opacity: 0.5;
  transition: 0.5s ease-out;
  transform: scale(1);
  :hover {
    opacity: 1;
    transform: scale(1.01);
  }

  @media screen and (max-width: 500px) {
    width: 75%;
    order: 1;
    margin-left: 3rem;
    margin-top: 0.5rem;
    border-radius: 5px;
    opacity: 0.5;
    transition: 0.5s ease-out;
    transform: scale(1);
    :hover {
      opacity: 1;
      transform: scale(1.01);
    }
  }
`;

export const Sub10 = styled.div`
  text-align: start;
  padding: 1rem 0rem 1rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;

  @media screen and (max-width: 500px) {
    width: 85%;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 10px;
  }
`;
