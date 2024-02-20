import { useRecoilValue, useSetRecoilState } from "recoil";
import { Container } from "./tabList.style";
// import CloseIcon from "../../../../../public//assets/svg/google-logo.svg";
import { openTabsState, selectedMenuSelector } from "@/recoil/menu";
import { Tab } from "@/types/menu";

export default function TabList() {
  const openTabs = useRecoilValue(openTabsState);
  const setOpenTabs = useSetRecoilState(openTabsState);
  const setMenu = useSetRecoilState(selectedMenuSelector);

  const onRemoveTab = (id: string) => {
    // let selfChecked = false;
    // let newMenuList = openTabs.filter((menu: Tab) => {
    //   if (menu.id === id) {
    //     if (menu.isSelected) selfChecked = true;
    //     return false;
    //   }
    //   return true;
    // });

    // if (selfChecked && newMenuList.length > 0) {
    //   newMenuList[newMenuList.length - 1] = {
    //     ...newMenuList[newMenuList.length - 1],
    //     isSelected: true,
    //   };
    // }
    setMenu({ id: id, isClose: true });
    // console.log(newMenuList);

    // setOpenTabs(newMenuList);
  };

  return (
    <Container>
      {openTabs.map((tab: Tab) => (
        <div
          key={tab.id}
          className={`open-tab ${tab.isSelected ? "selected" : ""}`}
        >
          <span className="tab-title" onClick={() => setMenu({ id: tab.id })}>
            <span className="tab-mark" />
            {tab.menuName}
          </span>
          <button onClick={() => onRemoveTab(tab.id)}>
            {/* <CloseIcon width="14" height="14" viewBox="0 0 24 24" /> */}
          </button>
        </div>
      ))}
    </Container>
  );
}
