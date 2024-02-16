import { useState } from "react";
import * as S from "./dashboard.styles";
import MainHeader from "@/components/molcules/MainHeader";
import Aside from "@/components/molcules/Aside";
import { ToastContainer } from "react-toastify";
import Content from "@/components/molcules/Content";
import TabList from "@/components/atoms/Tabs/TabList";

export const DashboardPage = ({ children }: any) => {
  const [passwordModalVisible, setPasswordModalVisible] =
    useState<boolean>(false);
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth <= 600) {
      setOpen(!isOpen);
    } else {
      setOpen(!isOpen);
    }
  };

  const openHandler = (openValue: any) => {
    setOpen(!isOpen);
  };

  return (
    <>
      <S.Grid className={`${isOpen ? "on" : "off"}`}>
        <MainHeader toggleMenu={toggleMenu} isOpen={isOpen} />
        <Aside
          toggleMenu={toggleMenu}
          isOpen={isOpen}
          openHandler={openHandler}
        />
        <Content isOpen={isOpen}>
          <ToastContainer />
          <TabList />
          {children}
        </Content>
      </S.Grid>
    </>
  );
};
