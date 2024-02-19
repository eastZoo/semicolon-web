import styled, { css } from "styled-components";

type AsideTypeProps = {
  menuIsOpen: boolean;
};

export const Container = styled.div`
  grid-area: AS;
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);

  &.off {
    display: none;
  }

  @media (max-width: 600px) {
    grid-area: AS;
    position: relative;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
    z-index: 2;

    &.off {
      overflow: hidden;
      position: fixed;
      width: 0;
      z-index: 2;
    }
  }
`;

// 사이드메뉴 Header 레이아웃
export const Header = styled.header`
  display: flex;
  height: 60px;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;

// 사이드메뉴 숨기기(화살표) 버튼
export const AsideBtn = styled.button`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;

  &.off {
    display: none;
  }

  svg {
    path:first-of-type {
      stroke: ${(props) => props.theme.colors.third};
    }

    path:nth-of-type(2) {
      fill: ${(props) => props.theme.colors.third};
    }

    &:hover {
      cursor: pointer;

      path:first-of-type {
        fill: ${(props) => props.theme.colors.third};
      }

      path:nth-of-type(2) {
        fill: ${(props) => props.theme.colors.white};
      }
    }
  }
`;

// 사이드메뉴 Header 로고 설정
export const LogoImg = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: 600px) {
    display: none;
  }
`;

// 사이드메뉴 임시 헤더 txt
export const TitleHeader = styled.h1`
  margin-bottom: 2px;
  color: ${(props) => props.theme.colors.third};
  font-size: 2rem;

  @media (max - width: 600px) {
    display: none;
    width: 100px;
    margin-left: 5px;
    font-size: 2rem;
  }
`;

// 사이드메뉴 레이아웃
export const MenuNavigator = styled.nav`
  overflow-y: auto;
  display: flex;
  height: calc(100vh - 130px);
  margin-top: 20px;
  font-size: 1.1rem;
  font-weight: 400;
  flex-direction: column;
  justify-content: space-between;

  // Level-1 메뉴 설정
  .m-dept01 {
    position: relative;
    display: flex;
    height: 44px;
    padding: 0 20px;
    color: ${(props) => props.theme.colors.third};
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    // Level-1 메뉴 마우스 Hover 시 설정
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    span {
      display: flex;
      align-items: center;
      line-height: 24px;

      span {
        margin-bottom: 1px;
      }

      .d01-icon {
        margin-right: 10px;

        path:nth-of-type(2),
        path:nth-of-type(3) {
          fill: ${(props) => props.theme.colors.third};
          opacity: 0.7;
        }
      }
    }

    // Level-1 메뉴 Toggle 화살표
    .move-page-icon {
      transition: all 0.2s ease;

      path:last-of-type {
        fill: ${(props) => props.theme.colors.third};
      }
    }

    // 하위 Level-2 메뉴 선택 시 표기 설정
    &.page-now {
      background: ${(props) => props.theme.colors.sideOpen};

      &::before {
        position: absolute;
        content: "";
        width: 5px;
        height: 44px;
        left: 0;
        background: ${(props) => props.theme.colors.primary};
      }

      svg {
        path:nth-of-type(2),
        path:nth-of-type(3) {
          fill: ${(props) => props.theme.colors.primary};
        }
      }
    }

    // Level-1 메뉴 Open 시 표기 설정
    &.open {
      color: ${(props) => props.theme.colors.white};
      background: ${(props) => props.theme.colors.primary};

      &::before {
        position: absolute;
        content: "";
        width: 5px;
        height: 44px;
        left: 0;
        background: rgba(0, 0, 0, 0.4) !important;
      }

      span {
        .d01-icon {
          path:nth-of-type(2),
          path:nth-of-type(3) {
            fill: rgba(255, 255, 255, 1);
          }
        }
      }

      .move-page-icon {
        transition: all 0.2s ease;
        transform: rotate(90deg);

        path:last-of-type {
          fill: ${(props) => props.theme.colors.white};
        }
      }
    }
  }

  // Level-2 메뉴 리스트 설정
  .m-dept02-list {
    overflow: hidden;
    max-height: 0;
    background: ${(props) => props.theme.colors.sideBG};
    transition: max-height 0.3s ease;

    // Level-2 메뉴 Open 시 설정
    &.open {
      height: auto;
      max-height: 1000px;
      transition: max-height 1s ease;
    }

    // Level-2 메뉴 설정
    .m-dept02 {
      overflow: hidden;
      display: flex;
      height: 44px;
      padding: 0 20px;
      align-items: center;
      cursor: pointer;
      font-size: 1rem;

      // Level-2 메뉴 Hover 시 설정
      &:hover {
        background: ${(props) => props.theme.colors.side02Highlight};
      }

      // Level-2 메뉴 Open 시 설정
      &.page-now {
        position: relative;
        background: ${(props) => props.theme.colors.side02Highlight};

        &::before {
          position: absolute;
          content: "";
          width: 5px;
          height: 44px;
          left: 0;
          background: ${(props) => props.theme.colors.primary};
        }

        span {
          .d02-icon {
            margin-right: 10px;

            path {
              fill: ${(props) => props.theme.colors.primary};
              opacity: 0.7;
            }
          }

          span {
            color: ${(props) => props.theme.colors.primary};
          }
        }
      }

      // Level-2 메뉴 Text 및 아이콘 설정
      span {
        display: flex;
        align-items: center;
        letter-spacing: -0.05rem;

        .d02-icon {
          margin-right: 10px;

          path {
            fill: ${(props) => props.theme.colors.third};
            opacity: 0.2;
          }
        }

        span {
          color: ${(props) => props.theme.colors.third};
        }
      }
    }
  }
`;
