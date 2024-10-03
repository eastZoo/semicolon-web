"use client";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Image from "next/image";
import { groupBy } from "../../../../lib/common.fn";

import { Menu } from "../../../../types/menu";
import {
  menuListState,
  selecteMenuState,
  selectedMenuSelector,
} from "@/recoil/menu";
import { menuListDum } from "@/data/dummey";
import Link from "next/link";

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
      if (menuGroup[depth + 1] && menu.menuType === "1") {
        resultComponent.push(
          <div key={menu.oid}>
            <div
              className={`m-dept01`}
              onClick={() => toggleMenu(menu.oid, menu.isOpen)}
            >
              <span>
                {/* {[...Array(depth)].map((num: any) => {
                  return <>&nbsp;&nbsp;&nbsp;</>;
                })} */}
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
          <Link href={menu.path}>
            <div
              key={menu.oid}
              className={`m-dept02 ${
                menu.oid === selectedMenuId ? "page-now" : ""
              }`}
              onClick={(isOpen: any) => {
                if (window.innerWidth <= 600) {
                  setMenu({ id: menu.oid });
                  setMenuParent(menu.parentOid);
                } else {
                  setMenu({ id: menu.oid });
                  setMenuParent(menu.parentOid);
                }
              }}
            >
              <span>
                {/* {[...Array(depth)].map((num: any) => {
                  return <>&nbsp;&nbsp;&nbsp;</>;
                })} */}
                {menu.oid === selectedMenuId ? (
                  <Image
                    src={menu.selectIconUrl}
                    alt={menu.menuName}
                    width={20}
                    height={20}
                    className="d02-icon"
                  />
                ) : (
                  <Image
                    src={menu.iconUrl}
                    alt={menu.menuName}
                    width={20}
                    height={20}
                    className="d02-icon"
                  />
                )}
                <span>{menu.menuName}</span>
              </span>
            </div>
          </Link>
        );
      }
    }

    return resultComponent;
  };

  return (
    // <>
    //   <div>{renderMenu(menuGroup[0], 0, "0")}</div>
    //   <div>
    //     <div className="m-dept01">
    //       <span>
    //         <span>Admin</span>
    //       </span>
    //     </div>
    //     <div className="m-dept02-list open">
    //       <div className="m-dept02 ">
    //         <span>
    //           <Image
    //             src="/assets/svg/setting.svg"
    //             alt="setting"
    //             width={20}
    //             height={20}
    //             className="d02-icon"
    //           />
    //           <span>Announce</span>
    //         </span>
    //       </div>
    //     </div>
    //     <div className="m-dept02-list open">
    //       <div className="m-dept02 ">
    //         <span>
    //           <Image
    //             src="/assets/svg/announce_icon.svg"
    //             alt="announce"
    //             width={20}
    //             height={20}
    //             className="d02-icon"
    //           />
    //           <span>Setting</span>
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <div>{renderMenu(menuGroup[0], 0, "0")}</div>
  );
}
