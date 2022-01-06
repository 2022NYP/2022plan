import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import GoogleLogin from 'react-google-login'

const LoginPage = () => {
  const navigate = useNavigate()
  const clientId =
    '625161595668-667irjaah6c338grk6pv6gjddg44n5sb.apps.googleusercontent.com'
  const onSuccess = () => {
    navigate('/plan')
  }
  return (
    <>
      <S.MainSection>
        <S.Title>당신의 신년계획을 아름답게 작성해보세요!</S.Title>
        <GoogleLogin
          buttonText="구글 로그인"
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
