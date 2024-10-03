import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
  grid-area: AS;
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(100% - 760px);
  overflow: auto;

  /* display: grid;
  grid-template-rows: auto 160px; */

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

export const TopAside = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

// 사이드메뉴 Header 레이아웃
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 사이드메뉴 숨기기(화살표) 버튼
// export const AsideBtn = styled.button`
//   display: flex;
//   height: 60px;
//   align-items: center;
//   justify-content: center;
//   border: none;
//   background: none;

//   &.off {
//     display: none;
//   }

//   svg {
//     path:first-of-type {
//       stroke: ${(props) => props.theme.colors.alternative};
//     }

//     path:nth-of-type(2) {
//       fill: ${(props) => props.theme.colors.alternative};
//     }

//     &:hover {
//       cursor: pointer;

//       path:first-of-type {
//         fill: ${(props) => props.theme.colors.alternative};
//       }

//       path:nth-of-type(2) {
//         fill: ${(props) => props.theme.colors.white};
//       }
//     }
//   }
// `;

// // 사이드메뉴 Header 로고 설정
// export const LogoImg = styled.img`
//   height: 40px;
//   width: 40px;

//   @media (max-width: 600px) {
//     display: none;
//   }
// `;

// 사이드메뉴 임시 헤더 txt
export const TitleHeader = styled.h1`
  color: ${(props) => props.theme.colors.dark};
  font-size: 2rem;

  @media (max-width: 600px) {
    width: 100px;
    margin-left: 5px;
    font-size: 2rem;
  }
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

// 사이드메뉴 레이아웃
export const MenuNavigator = styled.nav`
  overflow-y: auto;
  display: flex;
  /* height: calc(100vh - 130px); */
  font-size: 0.8rem;
  font-weight: 400;
  flex-direction: column;
  justify-content: space-between;

  &.bottomAside {
    width: 100%;
    /* height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-bottom: 24px; */
  }

  // Level-1 메뉴 설정
  .m-dept01 {
    position: relative;
    display: flex;
    /* height: 44px; */
    padding: 10px 20px;
    color: ${(props) => props.theme.colors.primary};
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition-duration: 0.5s;

    // Level-1 메뉴 마우스 Hover 시 설정
    &:hover {
      background: rgba(184, 233, 206, 0.4);
      font-size: 1rem;
      font-weight: 500;
    }

    span {
      display: flex;
      align-items: center;
      line-height: 24px;

      .d01-icon {
        path:nth-of-type(2),
        path:nth-of-type(3) {
          fill: ${(props) => props.theme.colors.primary};
          opacity: 0.7;
        }
      }
    }

    // Level-1 메뉴 Toggle 화살표
    .move-page-icon {
      transition: all 0.2s ease;

      path:last-of-type {
        fill: ${(props) => props.theme.colors.alternative};
      }
    }

    // 하위 Level-2 메뉴 선택 시 표기 설정
    &.page-now {
      background: ${(props) => props.theme.colors.alternative};

      &::before {
        position: absolute;
        content: "";
        width: 5px;
        /* height: 44px; */
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
        /* width: 5px;
        height: 44px; */
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
    background: ${(props) => props.theme.colors.white};
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
      padding: 10px 20px;
      align-items: center;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.5s ease;

      // Level-2 메뉴 Hover 시 설정
      &:hover {
        /* background: rgba(184, 233, 206, 0.4); */
        background: rgba(0, 0, 0, 0.05);
        font-size: 1.1rem;
        font-weight: 500;
      }

      // Level-2 메뉴 Open 시 설정
      &.page-now {
        position: relative;
        /* background: ${(props) => props.theme.colors.white}; */
        background: rgba(0, 0, 0, 0.05);

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
            path {
              fill: ${(props) => props.theme.colors.primary};
              opacity: 0.7;
            }
          }

          span {
            color: ${(props) => props.theme.colors.primary};
            font-size: 1.1rem;
            font-weight: 500;
          }
        }
      }

      // Level-2 메뉴 Text 및 아이콘 설정
      span {
        display: flex;
        align-items: center;
        gap: 8px;
        letter-spacing: -0.05rem;
        font-weight: 500;
        padding: 0 10px;

        .d02-icon {
          /* svg {
            rect {
              fill: ${(props) => props.theme.colors.primary};
              opacity: 0.2;
            }
          } */
          img {
            color: ${(props) => props.theme.colors.primary};
          }
        }

        span {
          color: ${(props) => props.theme.colors.black};
        }
      }
    }
  }
`;
