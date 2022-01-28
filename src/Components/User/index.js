import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userName, userProfile, userMail, modalVisible } from '../../Atom'
import * as S from './style'

import { GoogleLogout } from 'react-google-login'
import { useEffect } from 'react'

const UserModal = () => {
  const [name, setName] = useRecoilState(userName)
  const [profile, setProfile] = useRecoilState(userProfile)
  const [mail, setMail] = useRecoilState(userMail)

  const [show, setShow] = useRecoilState(modalVisible)
  const modalEl = useRef()
  const handleClickOutside = ({ target }) => {
    if (show && !modalEl.current.contains(target)) setShow(false)
  }
  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  })

  const navigate = useNavigate()
  const TryLogOut = () => {
    navigate('/')
  }

  return (
    <>
      {show ? (
        <>
          <S.MainSection ref={modalEl}>
            <S.ProfileSection>
              <img src={profile} alt="" className="modalProfile" />
            </S.ProfileSection>
            <S.Content>
              <span>이름</span>
              {name}
            </S.Content>
            <S.Content>
              <span>이메일</span>
              {mail}
            </S.Content>
            <S.LogOut onClick={TryLogOut}>로그아웃</S.LogOut>
          </S.MainSection>
        </>
      ) : null}
    </>
  )
}

export default UserModal
