import React from "react";
import * as S from "./style";
import * as I from "../../Assets";

const NotFoundPage = () => {
  return (
    <S.MainSection>
      <div>
        <I.NotFoundImg />
        <S.MainTitle>페이지를 찾을 수 없습니다.</S.MainTitle>
        <S.SubTitle>
          페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다. <br />
          입력하신 주소가 정확한지 확인해주세요.
        </S.SubTitle>
      </div>
    </S.MainSection>
  );
};

export default NotFoundPage;
