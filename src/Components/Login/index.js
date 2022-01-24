import React from 'react'
import { userProfile, userName } from '../../Atom'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import * as I from '../../Assets'
import GoogleLogin from 'react-google-login'
import api from '../../api.js'
import { useRecoilState, useSetRecoilState } from 'recoil'

const LoginPage = () => {
  const navigate = useNavigate()
  const clientId =
    '625161595668-667irjaah6c338grk6pv6gjddg44n5sb.apps.googleusercontent.com'
  const [name, setName] = useRecoilState(userName)
  const [profile, setProfile] = useRecoilState(userProfile)
  const onSuccess = res => {
    console.log(res)
    setName(res.profileObj.name)
    setProfile(res.profileObj.imageUrl)
    navigate('/plan')
  }

  return (
    <>
      <S.MainSection>
        <I.LoginBackground></I.LoginBackground>
        <S.Title>Welcome to new year plan</S.Title>
        <S.SubTitle>새해가 밝았습니다 신년계획을 작성해 보세요</S.SubTitle>
        <GoogleLogin
          buttonText="Sign in with Google"
          accessType="offline"
          responseType="permission"
          approvalPrompt="force"
          prompt="consent"
          clientId={clientId}
          onSuccess={onSuccess}
          className="googleLogin"
        ></GoogleLogin>
      </S.MainSection>
    </>
  )
}

export default LoginPage
