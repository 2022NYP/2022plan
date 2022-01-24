import React, { useState } from 'react'
import * as S from './style'
import PlanItem from './PlanItem'
import * as I from '../../Assets'
import { useRecoilState } from 'recoil'
import { userName } from '../../Atom'

const PlanPage = () => {
  const [plans, setPlans] = useState([])
  const [name, setName] = useRecoilState(userName)
  return (
    <>
      <S.MainSection>
        <S.Title>{name}님의 신년계획</S.Title>
        <S.PlanSection>
          {plans.map((ele, i) => (
            <PlanItem i={i}></PlanItem>
          ))}
          <S.PlusBtn
            onClick={() => {
              setPlans(plans.concat(''))
            }}
          >
            <I.Plus></I.Plus>
          </S.PlusBtn>
        </S.PlanSection>
      </S.MainSection>
    </>
  )
}

export default PlanPage
