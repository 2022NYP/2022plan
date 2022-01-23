import React, { useState } from 'react'
import * as S from './style'
import ShareItem from './ShareItem'

const SharePage = () => {
  return (
    <>
      <S.MainSection>
        <S.Title>모두의 신년계획</S.Title>
        <S.ShareSection>
          <ShareItem></ShareItem>
        </S.ShareSection>
      </S.MainSection>
    </>
  )
}

export default SharePage
