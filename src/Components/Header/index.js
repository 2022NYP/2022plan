import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import * as S from './style'
import * as I from '../../Assets'
import { useRecoilState } from 'recoil'
import { Profile } from '../../Atom'

const Header = () => {
  const [userProfile, setProfile] = useRecoilState(Profile)
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
            borderRadius: isActive ? '5px' : 'none',
          })}
        >
          남 계획
        </NavLink>
      </S.Container>
      <Link to="/user">
        <img src={userProfile} alt=""></img>
      </Link>
    </S.Header>
  )
}

export default Header
