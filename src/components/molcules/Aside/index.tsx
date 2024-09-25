import AsideList from "./AsideList.js";
import * as S from "./aside.styles";
import MenuFoldIcon from "../../../assets/svg/Left-circle.svg";
import { ScrollArea } from "@/components/atoms/ScrollArea";

export default function Aside({ toggleMenu, isOpen, openHandler }: any) {
  return (
    <S.Container className={`${isOpen ? "on" : "off"}`}>
      <S.Header>
        <S.TitleHeader>Semicolon</S.TitleHeader>
        <S.AsideBtn
          className={`${isOpen ? "on" : "off"}`}
          type="button"
          onClick={toggleMenu}
        >
          {/* <MenuFoldIcon /> */}
        </S.AsideBtn>
      </S.Header>
      <S.MenuNavigator>
        <AsideList openHandler={openHandler} />
      </S.MenuNavigator>
    </S.Container>
  );
}
