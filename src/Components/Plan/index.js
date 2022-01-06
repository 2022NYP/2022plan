import React, { useState } from 'react'
import * as S from './style'
import * as I from '../../Assets'
import PlanItem from './PlanItem'
import haha from '../../Assets/Background.svg'
const PlanPage = () => {
  const [plans, setPlans] = useState([])
  const addItem = () => {
    setPlans(plans.concat(''))
  }
  return (
    <>
      <S.MainSection>
        <S.Title>누구의 신년계획</S.Title>
        <S.PlanSection>
          {plans.map(ele => (
            <PlanItem></PlanItem>
          ))}
          <S.PlusBtn onClick={addItem}>
            <I.Plus></I.Plus>
          </S.PlusBtn>
        </S.PlanSection>
      </S.MainSection>
    </>
  )
}

export default PlanPage
