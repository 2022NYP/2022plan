import { atom } from 'recoil'

export const userName = atom({
  key: 'userName',
  default: '',
})

export const userProfile = atom({
  key: 'Profile',
  default: '',
})

