import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { saved } from '../../../Atom'
import * as S from './style'

const PlanItem = props => {
  const [title, setTitle] = useState('제목입력')
  const [content, setContent] = useState('내용입력')
  const [data, setData] = useState({ title: '', content: '' })
  const [save, setSave] = useRecoilState(saved)

  useEffect(() => {
    setData({ title: title, content: content, id: props.i })
  }, [title, content])

  const TrySave = () => {
    setSave(save.concat(data))
    console.log(save)
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
        <button onClick={TrySave}>저장</button>
      </S.MainSection>
    </>
  )
}

export default PlanItem
