import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// import MovePageIcon from "../../../../assets/svg/Angle-right.svg";
// import D02Icon from "../../../../assets/svg/File.svg";
// import D01Icon from "../../../../assets/svg/Group-folders.svg";

import { groupBy } from "../../../../lib/common.fn";

import { Menu } from "../../../../types/menu";
import {
  menuListState,
  selecteMenuState,
  selectedMenuSelector,
} from "@/recoil/menu";
import { menuListDum } from "@/data/dummey";

export default function AsideList(props: any) {
  const [menuParent, setMenuParent] = useState();
  const [menuList, setMenuList] = useRecoilState(menuListState);
  const setMenu = useSetRecoilState(selectedMenuSelector);
  const [menuGroup, setMenuGroup] = useState(groupBy(menuList, "depth"));
  const selectedMenuId = useRecoilValue(selecteMenuState);

  const { data }: any = menuListDum; // 권한메뉴

  useEffect(() => {
    if (Array.isArray(data) && data.length !== 0) {
      setMenuList(data);
    }
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    setMenuGroup(groupBy(menuList, "depth"));
  }, [menuList]);

  const toggleMenu = (id: string, isOpen: boolean) => {
    setMenuList(
      menuList.map((menu: Menu) => {
        if (menu.oid === id) {
          return { ...menu, isOpen: !isOpen };
        }
        return menu;
      })
    );
  };
  const renderMenu = (
    list: Menu[],
    depth: number = 0,
    parentId: string | null
  ) => {
    const mList = list.filter((menu: Menu) => menu.parentOid === parentId);

    const resultComponent = [];

    for (const menu of mList) {
      if (menuGroup[depth + 1] && menu.menuType === "2") {
        resultComponent.push(
          <div key={menu.oid}>
            <div
              className={`m-dept01 ${
                menuParent === menu.oid ? "page-now" : ""
              } ${menu.isOpen ? "open" : ""}`}
              onClick={() => toggleMenu(menu.oid, menu.isOpen)}
            >
              <span>
                {[...Array(depth)].map((num: any) => {
                  return <>&nbsp;&nbsp;&nbsp;</>;
                })}
                {/* <D01Icon className="d01-icon" /> */}
                <span>{menu.menuName}</span>
              </span>
              {/* <MovePageIcon className="move-page-icon" /> */}
            </div>
            <div className={`m-dept02-list ${menu.isOpen ? "open" : ""}`}>
              {renderMenu(menuGroup[depth + 1], depth + 1, menu.oid)}
            </div>
          </div>
        );
      } else {
        resultComponent.push(
          <div
            key={menu.oid}
            className={`m-dept02 ${
              menu.oid === selectedMenuId ? "page-now" : ""
            }`}
            onClick={(isOpen: any) => {
              if (window.innerWidth <= 600) {
                setMenu({ id: menu.oid });
                setMenuParent(menu.parentOid);
                props.openHandler(!isOpen);
              } else {
                setMenu({ id: menu.oid });
                setMenuParent(menu.parentOid);
              }
            }}
          >
            <span>
              {[...Array(depth)].map((num: any) => {
                return <>&nbsp;&nbsp;&nbsp;</>;
              })}
              {/* <D02Icon className="d02-icon" /> */}
              <span>{menu.menuName}</span>
            </span>
          </div>
        );
      }
    }

    return resultComponent;
  };

  return <>{renderMenu(menuGroup[0], 0, "0")}</>;
}
