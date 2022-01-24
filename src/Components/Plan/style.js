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
  height: 78.09vh;
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

export const PlanSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 89vw;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 640px) {
  }
`

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
`
