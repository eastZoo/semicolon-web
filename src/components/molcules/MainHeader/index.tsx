import { useState } from "react";
import LogoutIcon from "../../../assets/svg/Shutdown.svg";
// import MenuOpenIcon from "../../../assets/svg/Menu.svg";
// import UserIcon from "../../../assets/svg/Address-card.svg";
import {
  Container,
  MenuBtn,
  Profile,
  PopupBtn,
  ButtonPopup,
  UsernameWrapper,
  UserCompany,
  UserName,
} from "./mainHeader.styles";

export default function MainHeader({ toggleMenu, isOpen }: any) {
  // const { data }: any = useSession();
  const data = {
    colonyName: "semicolon",
    userName: "신동주",
  };

  const [btnShow, setBtnShow] = useState(false);

  const logoutClick = () => {
    setBtnShow(!btnShow);
  };

  return (
    <Container className={`${isOpen ? "mobile-off" : ""}`}>
      <MenuBtn className={`${isOpen ? "on" : "off"}`} onClick={toggleMenu}>
        {/* <MenuOpenIcon /> */}
      </MenuBtn>
      <Profile onClick={logoutClick}>
        <UsernameWrapper>
          <UserCompany>{data.colonyName}</UserCompany>
          <UserName>{data.userName} 님</UserName>
          {/* <UserIcon /> */}
        </UsernameWrapper>
      </Profile>
    </Container>
  );
}
