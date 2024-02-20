import styled from "styled-components";

export const Container = styled.div`
  overflow-x: overlay;
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  padding: 0 5px;
  background: ${(props) => props.theme.colors.secondary};
  white-space: nowrap;
  align-items: flex-end;

  // 탭메뉴 스크롤바 설정
  &::-webkit-scrollbar {
    visibility: hidden;
    width: 0px;
    height: 0px;
    background: transparent;
    transition: all 0.2s ease;
  }

  &:hover {
    &::-webkit-scrollbar {
      visibility: visible;
      width: 6px;
      height: 6px;
      transition: all 0.2s ease;
    }

    &::-webkit-scrollbar-thumb {
      background-clip: padding-box;
      border: 1px solid transparent;
      border-radius: 3.5px;
      background-color: rgba(255, 255, 255, 0.6);
      transition: all 0.2s ease;

      &:hover {
        border: 0 solid transparent;
        background-color: ${(props) => props.theme.colors.scrollBarHover};
        transition: all 0.2s ease;
      }
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(255, 255, 255, 0);
    }
  }

  // 탭메뉴 표기 설정
  .open-tab {
    position: relative;
    float: none;
    display: flex;
    min-width: 140px;
    height: 30px;
    color: ${(props) => props.theme.colors.tabTxt};
    font-size: 1.3rem;
    border-radius: 4px 4px 0 0;
    background: ${(props) => props.theme.colors.tab};
    align-items: center;
    transition: background 0.2s ease;

    .tab-title {
      display: flex;
      min-width: 140px;
      height: 30px;
      padding-left: 15px;
      padding-right: 30px;
      align-items: center;

      .tab-mark {
        display: none;
        width: 6px;
        height: 6px;
        margin-right: 8px;
        border-radius: 50%;
        background: ${(props) => props.theme.colors.tabTxt};
      }
    }

    // 탭메뉴 닫기 버튼 설정
    button {
      position: absolute;
      display: flex;
      right: 5px;
      padding: 2px;
      border: none;
      background: none;
      align-items: center;
      justify-content: center;
      border-radius: 10px;

      &:hover {
        background: rgba(0, 0, 0, 0.2);
        cursor: pointer;
      }

      svg {
        path:last-of-type {
          fill: ${(props) => props.theme.colors.tabTxt};
        }
      }
    }

    // 탭메뉴간 간격 설정
    & + .open-tab {
      margin-left: 1px;
    }

    // 탭메뉴 Hover 시 표기 설정
    &:hover {
      color: ${(props) => props.theme.colors.tabTxtHover};
      background: rgba(255, 255, 255, 0.7);
      cursor: default;
      transition: background 0.2s ease;

      svg {
        path:last-of-type {
          fill: ${(props) => props.theme.colors.tabTxtHover};
        }
      }
    }

    // 현재 사용중인 탭메뉴 표기 설정
    &.selected {
      color: ${(props) => props.theme.colors.black};
      background: ${(props) => props.theme.colors.white};

      svg {
        path:last-of-type {
          fill: ${(props) => props.theme.colors.black};
        }
      }

      .tab-mark {
        display: block;
        background: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;
