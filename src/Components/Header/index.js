import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'
import * as I from '../../Assets'

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <I.Logo></I.Logo>
        <Link to="/plan">내 계획</Link>
        <Link to="/plan">남 계획</Link>
      </S.Container>
      <S.Profile></S.Profile>
    </S.Header>
  )
}

export default Header
