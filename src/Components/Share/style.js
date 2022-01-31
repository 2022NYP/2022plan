import styled from 'styled-components'
import Background from '../../Assets/Background.svg'

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 55px;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow: scroll;

  & {
    -ms-overflow-style: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Title = styled.div`
  font-size: 24px;
  text-align: center;
  padding: 70px;
`

export const ShareSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 62vw;
  margin: 0 auto;
`
