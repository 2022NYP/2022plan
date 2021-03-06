import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./style";
import * as I from "../../Assets";
import { useRecoilState } from "recoil";
import { userProfile, modalVisible } from "../../Atom";
import UserModal from "./UserModal";

const Header = () => {
  const [profile, setProfile] = useRecoilState(userProfile);
  const [show, setShow] = useRecoilState(modalVisible);
  return (
    <S.Header>
      <S.Container>
        <I.Logo></I.Logo>
        <NavLink
          to="/plan"
          style={({ isActive }) => ({
            borderBottom: isActive ? "5px solid #88400C" : "none",
            borderRadius: isActive ? "5px" : "none",
          })}
        >
          내 계획
        </NavLink>
        <NavLink
          to="/share"
          style={({ isActive }) => ({
            borderBottom: isActive ? "5px solid #88400C" : "none",
            borderRadius: isActive ? "5px" : "none",
          })}
        >
          남 계획
        </NavLink>
      </S.Container>
      <span onClick={() => setShow(true)}>
        <img className="headerProfile" src={profile} alt="" />
      </span>
      <S.ModalSection>
        <UserModal></UserModal>
      </S.ModalSection>
    </S.Header>
  );
};

export default Header;
