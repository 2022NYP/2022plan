import { atom } from "recoil";

export const isLogin = atom({
  key: "isLogin",
  default: false,
});

export const userName = atom({
  key: "userName",
  default: "",
});

export const userMail = atom({
  key: "userMail",
  default: "",
});

export const userProfile = atom({
  key: "Profile",
  default: "",
});

export const plan = atom({
  key: "plan",
  default: [],
});

export const shared = atom({
  key: "shared",
  default: [],
});

export const saved = atom({
  key: "saved",
  default: [],
});

export const modalVisible = atom({
  key: "modalVisible",
  default: false,
});
