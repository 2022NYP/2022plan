import React from 'react'
import { useRecoilState } from 'recoil'
import { userName, Profile } from '../../Atom'

const UserPage = () => {
  const [name, setName] = useRecoilState(userName)

  return <>{name}</>
}

export default UserPage
