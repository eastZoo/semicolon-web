import { useRecoilValue } from "recoil";
import { openTabsState } from "../../../states/menu";
import { Tab } from "../../../types/menu";

export default function TabContents() {
  const openTabs = useRecoilValue(openTabsState);

  return (
    <>
      {openTabs.map((tab: Tab) => (
        <div
          key={tab.id}
          style={{ display: tab.isSelected ? "block" : "none" }}
        >
          {tab.component}
        </div>
      ))}
    </>
  );
}
