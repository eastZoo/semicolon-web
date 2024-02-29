import { Button } from "@/components/atoms/Button";
import { InputSearchBar } from "@/components/atoms/Input/InputText";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as S from "./MainHeader";

export const MainHeader = () => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleSearchClick = () => {
    setIsSearchClicked(prevState => !prevState);
  }
  return (
    <S.Header>
      <S.HeaderBox>
        <Image
          src="/assets/svg/sample_logo.svg"
          alt="samle_logo"
          width="200"
          height="20"
        />
        <S.LinkGroup>
          <Link href="/">Home</Link>
          <Link href="/">시작 가이드</Link>
          <Link href="/">나의 콜로니</Link>
        </S.LinkGroup>
        <S.functionGroup>
          <InputSearchBar
            placeholder="키워드를 입력해주세요."
            size="xlg"
            src="/assets/svg/search.svg"
            alt="검색"
          />
          <Button label="로그인" type="button" color="searchbar_login" width="100px"/>
        </S.functionGroup>
      </S.HeaderBox>
    </S.Header>
  );
};
