import styled from "styled-components";

export const MainSection = styled.div`
  display: inline-block;
  width: 400px;
  height: 330px;
  box-sizing: border-box;
  background-color: #fff0a5;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 10px 55px 55px;
  margin: 0 30px 30px 0;
  &:nth-child(4n) {
    margin-right: 0;
  }

  @media screen and (max-width: 1750px) {
    &:nth-child(3n) {
      margin-right: 0;
    }
    &:nth-child(4n) {
      margin-right: 30px;
    }
  }

  @media screen and (max-width: 1415px) {
    &:nth-child(2n) {
      margin-right: 0;
      background-color: red;
    }
    &:nth-child(3n) {
      margin-right: 30px;
    }
    &:nth-child(6n) {
      margin-right: 0;
      background-color: red;
    }
  }

  @media screen and (max-width: 935px) {
    &:nth-child(3n) {
      margin-right: 0px;
    }
    margin: 0;
    margin-bottom: 30px;
  }

  textarea {
    width: 100%;
    border: 0;
    background-color: #fff0a5;
    line-height: 31px;
    resize: none;
    font-family: "KOTRA";
    overflow: hidden;
  }
  textarea:focus {
    outline: 0;
  }
`;

export const Title = styled.div`
  height: 45px;
  margin-bottom: 36px;
  textarea {
    font-size: 24px;
    text-align: center;
    height: 100%;
  }
`;

export const Content = styled.div`
  textarea {
    font-size: 18px;
    width: 100%;
    height: 180px;
    line-height: 32px;
    background-attachment: local;
    background-image: repeating-linear-gradient(
      #fff0a5,
      #fff0a5,
      #fff0a5 30px,
      #000 31px,
      #000 31px,
      #fff0a5 31px
    );
    overflow: scroll;
    & {
      -ms-overflow-style: none;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
