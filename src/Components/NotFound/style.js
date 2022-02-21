import styled from "styled-components";

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Noto Sans", sans-serif;
  @media (max-width: 700px) {
    svg {
      width: 450px;
    }
  }
  @media (max-width: 400px) {
    svg {
      width: 300px;
    }
  }
`;

export const MainTitle = styled.div`
  font-size: 3vw;
  margin: 30px 0;
  @media (max-width: 700px) {
    font-size: 5vw;
  }
`;

export const SubTitle = styled.div`
  font-size: 1vw;
  line-height: 3vh;
  @media (max-width: 700px) {
    font-size: 3vw;
  }
`;
