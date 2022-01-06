import React from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './style'
import * as I from '../../Assets'

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <I.Logo></I.Logo>
        <NavLink
          to="/plan"
          style={({ isActive }) => ({
            borderBottom: isActive ? '5px solid #88400C' : 'none',
            borderRadius: isActive ? '5px' : 'none',
          })}
        >
          내 계획
        </NavLink>
        <NavLink
          to="/share"
          style={({ isActive }) => ({
            borderBottom: isActive ? '5px solid #88400C' : 'none',
          })}
        >
          남 계획
        </NavLink>
      </S.Container>
      <S.Profile></S.Profile>
    </S.Header>
  )
}

export default Header
