import styled from 'styled-components'

export const MainSection = styled.div`
  * {
    font-family: 'Noto Sans';
  }

  display: flex;
  float: right;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 400px;
  background-color: #f6d284;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding: 40px 50px 20px;
  border-radius: 10px;

  @media (max-width: 500px) {
    width: 262px;
    height: 300px;
    padding: 30px 35px 20px;
  }
`

export const ProfileSection = styled.div`
  width: 100%;
  img {
    display: block;
    width: 95px;
    height: 95px;
    border-radius: 50%;
    margin: 0 auto;
  }
  padding-bottom: 40px;
  border-bottom: 1px solid #989898;

  @media (max-width: 500px) {
    padding-bottom: 20px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #989898;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  span {
    color: #989898;
  }
`

export const LogOut = styled.div`
  margin-top: 50px;
  color: #ff0000;
  cursor: pointer;
  font-size: 12px;
  @media (max-width: 500px) {
    margin-top: 30px;
  }
`
