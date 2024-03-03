import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  margin: auto;
  padding-bottom: 5rem;
  .hea {
    font-size: 3.5rem;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    margin-left: 4.5rem;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    padding-bottom: 15rem;
    .hea {
      font-size: 2rem;
      margin-left: 2.5rem;
    }
  }
`;
export const Label = styled.label`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.2rem;
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Input = styled.input`
  padding-left: 0.8rem;
  padding-top: 1.5rem;
  width: 18vw;
  border-bottom: 2px solid black;
  margin-top: 0.5rem;

  @media screen and (max-width: 500px) {
    padding-left: 0.9rem;
    padding-top: 1rem;
    width: 30vw;
    border-bottom: 2px solid black;
    margin-top: 0.5rem;
  }
`;
export const Input1 = styled.input`
  padding-left: 0.8rem;
  padding-top: 1.5rem;
  border-bottom: 2px solid black;
  width: 38vw;
  margin: 0.5rem 0rem;

  @media screen and (max-width: 500px) {
    padding-left: 0.3rem;
    padding-top: 1rem;
    border-bottom: 2px solid black;
    width: 70vw;
    margin: 0.5rem 0rem;
  }
`;
export const Textarea = styled.input`
  padding-left: 0.5rem;
  padding-bottom: 6rem;
  border-bottom: 2px solid black;
  width: 38vw;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 500px) {
    padding-left: 0.2rem;
    padding-bottom: 4rem;
    border-bottom: 2px solid black;
    width: 71vw;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const Subcontainer = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 0.2rem;
`;

export const Form = styled.form`
  margin-left: 5vw;
  @media screen and (max-width: 500px) {
    margin-left: 3rem;
  }
`;

export const Div = styled.div`
  margin-bottom: 0.5rem;
`;
export const Input2 = styled.input`
  font-size: 1rem;
  padding: 0.8rem 0rem 0.8rem 0rem;
  margin-left: 19vw;
  width: 20vw;
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
    width: 73vw;
    padding: 0.5rem 0rem 0.5rem 0rem;
    margin-left: 0rem;
  }
`;
