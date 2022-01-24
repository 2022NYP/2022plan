import React, { useState } from 'react'
import * as S from './style'
import PlanItem from './PlanItem'
import * as I from '../../Assets'
import { useRecoilState, useRecoilValue } from 'recoil'
import { userName, plan } from '../../Atom'

const PlanPage = () => {
  const [name, setName] = useRecoilState(userName)
  const plans = useRecoilValue(plan)
  const [test, setTest] = useRecoilState(plan)
  console.log(plans)
  return (
    <>
      <S.MainSection>
        <S.Title>{name}님의 신년계획</S.Title>
        <S.PlanSection>
          {test.map((ele, i) => (
            <PlanItem i={i}></PlanItem>
          ))}
          <S.PlusBtn
            onClick={() => {
              setTest(test.concat({ title: '제목 입력', content: '내용 입력' }))
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
