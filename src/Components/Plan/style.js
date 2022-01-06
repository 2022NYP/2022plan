import styled from 'styled-components'
import haha from '../../Assets/Background.svg'

export const MainSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 55px;
  background-image: url(${haha});
  background-repeat: no-repeat;
`

export const Title = styled.div`
  font-size: 36px;
  text-align: center;
  padding: 70px;
`

export const PlanSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1690px;
  margin: 0 auto;
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
`
