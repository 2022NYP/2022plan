import React, { useState } from 'react'
import * as S from './style'
import * as I from '../../Assets'
import haha from '../../Assets/Background.svg'
const SharePage = () => {
  const [plans, setPlans] = useState([])
  const addItem = () => {
    setPlans(plans.concat(''))
  }
  return (
    <>
      <S.MainSection>
        <S.Title>누구의 신년계획</S.Title>
        <S.PlanSection>
          <S.PlusBtn onClick={addItem}>
            <I.Plus></I.Plus>
          </S.PlusBtn>
        </S.PlanSection>
      </S.MainSection>
    </>
  )
}

export default SharePage
