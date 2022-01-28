import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { plan } from '../../../Atom'
import * as S from './style'

const PlanItem = props => {
  const [title, setTitle] = useState('제목입력')
  const [content, setContent] = useState('내용입력')
  const [data, setData] = useState({ title: '', content: '' })
  const [test, setTest] = useRecoilState(plan)

  useEffect(() => {
    setData({ title: title, content: content, id: props.i })
    // console.log(data)
  }, [title, content])

  const save = props => {
    console.log(data)
    console.log(test[props.i])
    console.log(data.id)
  }
  return (
    <>
      <S.MainSection>
        <S.Title>
          <textarea
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          ></textarea>
        </S.Title>
        <S.Content>
          <textarea
            type="text"
            value={content}
            onChange={e => setContent(e.target.value)}
          ></textarea>
        </S.Content>
        <button onClick={save}>저장</button>
      </S.MainSection>
    </>
  )
}

export default PlanItem
