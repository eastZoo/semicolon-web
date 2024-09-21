import { IconButton, Button } from "@/components/atoms/Button";
import { InputSearchBar, InputText } from "@/components/atoms/Input/InputText";
import Link from "next/link";
import * as S from "./MainHeader";
import { DropdownMenu } from "../DropdownMenu";
import Image from "next/image";
import MainHeaderIcon from "@/assets/icon/sample_logo.svg";
import SearchIcon from "@/assets/icon/search.svg";

export const MainHeader = ({ items, toggleDropdown, isOpen, isLogin }: any) => {
  return (
    <S.Header>
      <S.HeaderLeft>
        <Link href="/">
          <MainHeaderIcon />
        </Link>
        <S.LinkGroup>
          <Link href="/">Home</Link>
          <Link href="/">시작 가이드</Link>
          <Link href="/">나의 콜로니</Link>
        </S.LinkGroup>
      </S.HeaderLeft>
      <S.HeaderRight>
        <InputText
          size="md"
          placeholder="검색"
          icon={<SearchIcon width={20} height={20} css={{ fill: "#8C8C8C" }} />}
        >
          <div className="inputBox">Ctrl + k</div>
        </InputText>
        <S.RightGroup>
          {isLogin ? (
            <>
              <DropdownMenu
                items={items}
                isOpen={isOpen}
                toggleDropdown={toggleDropdown}
              />
              <IconButton type="button" src="/assets/svg/alarm.svg" />
              <IconButton type="button" src="/assets/svg/profile.svg" />
            </>
          ) : (
            <Button label="로그인" type="button" color="mainLogin" />
          )}
        </S.RightGroup>
      </S.HeaderRight>
    </S.Header>
  );
};
