import React from "react";
import * as S from "./style";
import ShareItem from "./ShareItem";
import ShareList from "./ShareList";

const SharePage = () => {
  return (
    <>
      <S.MainSection>
        <S.Title>모두의 계획</S.Title>
        <S.ShareSection>
          <ShareItem></ShareItem>
        </S.ShareSection>
        <ShareList></ShareList>
      </S.MainSection>
    </>
  );
};

export default SharePage;
