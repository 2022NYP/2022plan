import React from 'react'
import { useRecoilState } from 'recoil'
import { userName, userProfile } from '../../Atom'

const UserPage = () => {
  const [name, setName] = useRecoilState(userName)
  const [profile, setProfile] = useRecoilState(userProfile)

  return (
    <>
      {name}
      <img src={profile}></img>
    </>
  )
}

export default UserPage
