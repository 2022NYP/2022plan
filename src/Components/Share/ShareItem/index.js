import React from 'react'
import * as S from './style'

const ShareItem = () => {
  const shared = [
    {
      title: '테스트1',
      content: '테스트1',
      img: '',
    },
    {
      title: '테스트2',
      content:
        '어쩌구 저쩌구 asdfasdf 어쩌구 저쩌구 asdfasdf 어쩌구 저쩌구 asdfasdf 어쩌구 저쩌구 asdfasdf 어쩌구 저쩌구 asdfasdf 어쩌구 저쩌구 asdfasdf 어쩌구 저쩌구 asdfasdf 어쩌구 저쩌구 asdfasdf 어쩌구 저쩌구 asdfasdf 어쩌구 저쩌구 asdfasdf 어쩌구 저쩌구 asdfasdf 어쩌구 저쩌구 asdfasdf 어쩌구 저쩌구 asdfasdf어쩌구 저쩌구 asdfasdf어쩌구 저쩌구 asdfasdf어쩌구 저쩌구 asdfasdf어쩌구 저쩌구 asdfasdf어쩌구 저쩌구 asdfasdf 어쩌구 저쩌구 asdfasdf',
      img: '',
    },
  ]
  return (
    <>
      {shared.map((item, index) => {
        return (
          <S.ShareItem>
            <img src={item.img} className="profile"></img>
            <S.Content>
              <S.Title>{item.title}</S.Title>
              <S.Text>{item.content}</S.Text>
            </S.Content>
          </S.ShareItem>
        )
      })}
    </>
  )
}

export default ShareItem
