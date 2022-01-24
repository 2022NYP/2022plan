import React from 'react'
import * as S from './style'
import { useRecoilState } from 'recoil'
import { plan } from '../../../Atom'

const ShareItem = () => {
  const [test, setTest] = useRecoilState(plan)

  return (
    <>
      {test.map((item, index) => {
        return (
          <S.ShareItem>
            <img src={item.img} className="profile"></img>
            <S.Content>
              <S.Title>{item.title}</S.Title>
              <S.Text>{item.content}</S.Text>
            </S.Content>
          </S.ShareItem>
        )
      })}
    </>
  )
}

export default ShareItem
