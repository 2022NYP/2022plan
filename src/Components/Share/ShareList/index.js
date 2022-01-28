import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { saved, shared } from '../../../Atom'

const ShareList = () => {
  const [save, setSave] = useRecoilState(saved)
  const [share, setShare] = useRecoilState(shared)
  const [checkedItems, setCheckedItems] = useState()
  
  const TryShare = () => {
    console.log(save)
    console.log(share)
  }
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
      <button onClick={TryShare}>공유하기</button>
    </div>
  )
}

export default ShareList
