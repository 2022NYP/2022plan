import React from 'react'
import { useRecoilState } from 'recoil'
import { saved } from '../../../Atom'

const ShareList = () => {
  const [save, setPlans] = useRecoilState(saved)
  return (
    <div>
      {save.map(ele => {
        return (
          <div>
            {ele.title}
            <input type="checkbox"></input>
          </div>
        )
      })}
      <button>공유하기</button>
    </div>
  )
}

export default ShareList
