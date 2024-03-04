import { IconButton } from "@/components/atoms/Button";
import { InputSearchBar } from "@/components/atoms/Input/InputText";
import Link from "next/link";
import * as S from "./MainHeader";
import DropdownMenu from "../DropdownMenu";
import Image from "next/image";

export const MainHeader = ({ items, toggleDropdown, isOpen }: any) => {
  return (
    <S.Header>
      <S.HeaderBox>
        <Link href="/">
          <Image
            src="/assets/svg/sample_logo.svg"
            alt="세미콜론"
            width="200"
            height={30}
          />
        </Link>
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

          <DropdownMenu
            items={items}
            isOpen={isOpen}
            toggleDropdown={toggleDropdown}
          />
          <IconButton type="button" src="/assets/svg/alarm.svg" />
          <IconButton type="button" src="/assets/svg/profile.svg" />
          {/* <Button
            label="로그인"
            type="button"
            color="mainLogin"
            width="100px"
          /> */}
        </S.functionGroup>
      </S.HeaderBox>
    </S.Header>
  );
};
