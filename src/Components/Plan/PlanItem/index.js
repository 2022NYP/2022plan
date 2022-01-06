import React, { useState } from 'react'
import * as S from './style'
const PlanItem = () => {
  const [title, setTitle] = useState('제목입력')
  const [content, setContent] = useState('내용입력')
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
