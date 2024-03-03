import styled from "styled-components";

export const Container = styled.div`
  @media screen and (max-width: 1700px) {
    width: 70%;
    margin: auto;
    text-align: start;
    padding-left: 3rem;
    margin-top: calc(10% + 8rem);
    padding-bottom: 3rem;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    text-align: center;
    padding-left: 0rem;
    margin-top: calc(60% + 2rem);
  }
`;

export const Sub1 = styled.div`
  @media screen and (max-width: 1700px) {
    display: flex;
    justify-content: space-evenly;
    column-gap: 2rem;
    margin-top: -1rem;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 0rem;
  }
`;
export const Sub2 = styled.div`
  @media screen and (max-width: 1700px) {
    .btn {
      margin-top: 1.5rem;
    }
  }

  @media screen and (max-width: 500px) {
    order: 2;
    .btn {
      margin-left: 0rem;
      margin-top: 0rem;
    }
  }
`;

export const Img = styled.img`
  @media screen and (max-width: 1700px) {
    margin-top: -3rem;
    margin-right: 20rem;
    width: 220px;
    border-radius: 1rem;
    opacity: 0.5;
    transition: 0.5s ease-out;
    :hover {
      opacity: 1;
    }
  }

  @media screen and (max-width: 500px) {
    margin: auto;
    order: 1;
    width: 120px;
    border-radius: 1rem;
    margin-bottom: 1rem;
    opacity: 0.5;
    transition: 0.5s ease-out;
    :hover {
      opacity: 1;
    }
  }
`;
export const Div1 = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  @media screen and (max-width: 1700px) {
    width: 90%;
    text-align: start;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.1rem;
    width: 85%;
    text-align: center;
    margin: auto;
    margin-bottom: 1rem;
  }
`;
