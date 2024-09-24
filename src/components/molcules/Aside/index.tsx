import AsideList from "./AsideList.js";
import * as S from "./aside.styles";
import Image from "next/image";

interface AsideProps {
  isOpen: boolean;
  openHandler: (openValue: any) => void;
}

export default function Aside({ isOpen, openHandler }: AsideProps) {
  return (
    <S.Container className={`${isOpen ? "on" : "off"}`}>
      <S.TopAside>
        <S.Header>
          <S.TitleHeader>
            <Image
              src="/assets/svg/sample_logo.svg"
              alt="Semicolon"
              width={200}
              height={200}
            />
          </S.TitleHeader>
          {/* <S.AsideBtn
          className={`${isOpen ? "on" : "off"}`}
          type="button"
          onClick={toggleMenu}
        >
          <MenuFoldIcon />
        </S.AsideBtn> */}
        </S.Header>
        <S.MenuContent>
          <S.MenuNavigator>
            <AsideList openHandler={openHandler} />
          </S.MenuNavigator>
        </S.MenuContent>
      </S.TopAside>
      <S.MenuNavigator className="bottomAside">
        <div className="m-dept01">
          <span>
            <span>SETTINGS</span>
          </span>
        </div>
        <div className="m-dept02-list open">
          <div className="m-dept02 ">
            <span>
              <Image
                src="/assets/svg/setting.svg"
                alt="setting"
                width={20}
                height={20}
                className="d02-icon"
              />
              <span>Setting</span>
            </span>
          </div>
        </div>
        <div className="m-dept02-list open">
          <div className="m-dept02 ">
            <span>
              <Image
                src="/assets/svg/logout.svg"
                alt="setting"
                width={20}
                height={20}
                className="d02-icon"
              />
              <span>Logout</span>
            </span>
          </div>
        </div>
      </S.MenuNavigator>
    </S.Container>
  );
}
