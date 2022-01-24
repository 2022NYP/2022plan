import React, { useEffect, useState } from 'react'
import * as S from './style'

const PlanItem = props => {
  const [title, setTitle] = useState('제목입력')
  const [content, setContent] = useState('내용입력')
  const [data, setData] = useState({ title: '', content: '' })
  useEffect(() => {
    setData({ title: title, content: content, id: props.i })
    console.log(data)
  }, [title, content])
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
      </S.MainSection>
    </>
  )
}

export default PlanItem
