import { atom, selector } from "recoil";
import { Menu, Tab, TabSelect } from "../types/menu";
import { v1 } from "uuid";

export const menuListState = atom<Menu[]>({
  key: `menuList/${v1()}`,
  default: [],
});

export const openTabsState = atom<Tab[]>({
  key: `openTabs/${v1()}`,
  default: [],
});

export const selecteMenuState = atom<string>({
  key: `selectedMenu/${v1()}`,
  default: "",
});

export const selectedMenuSelector = selector({
  key: `selectedMenuSelector/${v1()}`,
  get: ({ get }) => {
    return get(selecteMenuState);
  },
  set: ({ get, set }, newValue: Object) => {
    const { id, isClose } = newValue as TabSelect;
    const openTabs: Tab[] = get(openTabsState);
    const menuList: Menu[] = get(menuListState);
    const preMenuId: string = get(selecteMenuState);

    if (isClose) {
      const { chagedId, deletedMenuList } = closeTab(openTabs, id, preMenuId);
      set(selecteMenuState, chagedId);
      set(openTabsState, deletedMenuList);
    } else {
      set(selecteMenuState, id);
    }
  },
});

function closeTab(openTabs: Tab[], id: string, preMenuId: string) {
  let chagedId = preMenuId;
  let deletedMenuList = openTabs.filter((menu: Tab) => {
    return menu.id !== id;
  });

  if (id === preMenuId && deletedMenuList.length > 0) {
    chagedId = deletedMenuList[deletedMenuList.length - 1].id;
    deletedMenuList[deletedMenuList.length - 1] = {
      ...deletedMenuList[deletedMenuList.length - 1],
      isSelected: true,
    };
  }

  if (deletedMenuList.length === 0) chagedId = "";

  return { chagedId, deletedMenuList };
}
