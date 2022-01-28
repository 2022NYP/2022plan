import React from 'react'
import { isLogin } from '../../Atom/AtomContainer'
import { useRecoilState } from 'recoil'

const NotFoundPage = () => {
  const [login, setLogin] = useRecoilState(isLogin)
  return <div>없는 페이지입니다.</div>
}

export default NotFoundPage
