import styled from "styled-components";

export const Contaier = styled.div`
  @media screen and (max-width: 1600px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 8rem;
  }

  @media screen and (max-width: 500px) {
    display: block;
    position: relative;
    margin-top: 4rem;
  }
`;

export const One = styled.div`
  a {
    color: inherit;
  }
  @media screen and (max-width: 1700px) {
    margin-left: 12rem;
    margin-top: -14rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }
  @media screen and (max-width: 500px) {
    position: absolute;
    margin-top: 0.5rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }
`;

export const Btn = styled.button`
 text-align: center,
 margin-top: 1rem,
 padding: 0.5rem 1rem 0rem 1rem
`;

export const Two = styled.div`
  @media screen and (max-width: 1700px) {
    width: 40%;
    margin-left: 2rem;
    * {
      margin-bottom: 1rem;
    }
    .typo {
      font-size: 3rem;
      font-weight: bolder;
    }
    .Hea {
      margin-top: -0.5rem;
      font-size: 3rem;
    }
    .cur {
      font-size: 30px;
    }
    .para {
      width: 60%;
    }
    p {
      font-size: 1.1rem;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    }
  }

  @media screen and (max-width: 500px) {
    width: 72%;
    margin-top: 7rem;
    margin-left: 5rem;
    * {
      margin-bottom: 1rem;
    }
    .typo {
      font-size: 2rem;
      font-weight: bolder;
    }
    .Hea {
      margin-top: -0.5rem;
      font-size: 2rem;
    }
    .para {
      width: 80%;
    }
    .cur {
      font-size: 30px;
    }
    p {
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    }
  }
`;
