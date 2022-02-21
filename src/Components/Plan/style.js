import styled from "styled-components";
import Background from "../../Assets/Background.svg";
import MobileBackground from "../../Assets/MobileBackground.svg";

export const Main = styled.div`
  height: 100vh;
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 55px;
  background-image: url(${Background});
  background-size: cover;
  overflow: scroll;
  height: 100%;
  & {
    -ms-overflow-style: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 500px) {
    background-image: none;
    background-color: #f6d284;
    background-size: cover;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  text-align: center;
  padding: 70px;
`;

export const PlanSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 89vw;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 640px) {
  }
`;

export const PlusBtn = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 330px;
  background: rgba(242, 242, 242, 0.5);
  font-size: 60px;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
    transition: 0.3s;
  }
`;
