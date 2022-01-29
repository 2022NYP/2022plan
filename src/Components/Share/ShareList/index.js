import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { saved, shared } from '../../../Atom'
import * as S from './style'

const ShareList = () => {
  const [save, setSave] = useRecoilState(saved)
  const [share, setShare] = useRecoilState(shared)
  const [isChecked, setChecked] = useState()

  const TryShare = props => {
    console.log(isChecked)
  }

  const TryChecked = (ele, e) => {
    setChecked(!isChecked)
    setChecked(ele.id)
  }

  return (
    <S.MainSection>
      {save.map((ele, index) => {
        return (
          <S.ShareList>
            <input
              type="radio"
              name="share"
              onClick={() => {
                TryChecked(ele)
              }}
            ></input>
            <S.Title>{ele.title}</S.Title>
          </S.ShareList>
        )
      })}
      <button onClick={TryShare}>공유하기</button>
    </S.MainSection>
  )
}

export default ShareList
