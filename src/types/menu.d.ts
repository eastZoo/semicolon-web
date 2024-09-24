export interface Menu {
  oid: string;
  parentOid: string | NULL;
  depth: number;
  sortNo: number;
  menuCode?: string;
  menuType: string;
  menuName: string;
  systemYn?: boolean;
  useYn?: boolean;
  iconUrl: string;
  selectIconUrl: string;
  path: string;
  isSelected: boolean;
  isOpen: boolean;
  remark?: string;
  // component: JSX.Element;
}

export interface Tab {
  id: string;
  menuName: string;
  isSelected: boolean;
  component: JSX.Element;
}

export interface TabSelect {
  id: string;
  isClose?: boolean;
}
