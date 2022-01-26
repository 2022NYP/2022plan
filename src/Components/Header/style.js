import styled from 'styled-components'
export const Header = styled.div`
  position: relative;
  height: 70px;
  padding: 0 5.5vw;
  display: flex;
  align-items: center;
  font-size: 18px;
  justify-content: space-between;
  background: #f9cb68;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

  a {
    margin-left: 50px;
    color: #000;
    line-height: 65px;
  }

  .headerProfile {
    display: block;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
  }

  @media (max-width: 640px) {
    padding: 0 5vw;
    a {
      margin-left: 20px;
    }
    svg {
      width: 100px;
      height: 26px;
    }
  }

  @media (max-width: 500px) {
    a {
      margin-left: 40px;
      font-size: 16px;
    }
    svg {
      width: 70px;
      height: 20px;
    }
  }
`
export const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`

export const ModalSection = styled.div`
  position: absolute;
  top: 70px;
  width: 89.5vw;
  z-index: 2;
`
