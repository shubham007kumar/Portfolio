import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30vh;
  margin-bottom: 30vh;
  text-align: center;
  .hea {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
export const SubContainer = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 500px) {
    width: 80%;
    margin: auto;
  }
`;
export const Box = styled.div`
  width: 10%;
  padding: 0.5rem 1rem;
`;
