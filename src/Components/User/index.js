import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { userName, userProfile, userMail, modalVisible } from '../../Atom'
import * as S from './style'

const UserModal = () => {
  const [name, setName] = useRecoilState(userName)
  const [profile, setProfile] = useRecoilState(userProfile)
  const [mail, setMail] = useRecoilState(userMail)

  const [show, setShow] = useState(modalVisible)

  return (
    <>
      {show ? (
        <S.MainSection>
          <S.ProfileSection>
            <img src={profile} alt=""></img>
          </S.ProfileSection>
          <S.Content>
            <span>이름</span>
            {name}
          </S.Content>
          <S.Content>
            <span>이메일</span>
            {mail}
          </S.Content>
          <S.LogOut>로그아웃</S.LogOut>
        </S.MainSection>
      ) : null}
    </>
  )
}

export default UserModal
