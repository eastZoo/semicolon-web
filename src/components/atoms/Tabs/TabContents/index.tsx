import { useRecoilValue } from "recoil";

import { Tab } from "@/types/menu";
import { openTabsState } from "@/recoil/menu";

export default function TabContents() {
  const openTabs: any = useRecoilValue(openTabsState);

  console.log(openTabs);
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
