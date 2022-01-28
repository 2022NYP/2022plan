import React from 'react'
import * as S from './style'
import { useRecoilState } from 'recoil'
import { shared } from '../../../Atom'

const ShareItem = () => {
  const [share, setShare] = useRecoilState(shared)

  return (
    <>
      {share.map((item, index) => {
        return (
          <S.MainSection>
            <img src={item.img} className="profile" alt="" />
            <div>
              <S.Title>{item.title}</S.Title>
              <S.Text>{item.content}</S.Text>
            </div>
          </S.MainSection>
        )
      })}
    </>
  )
}

export default ShareItem
