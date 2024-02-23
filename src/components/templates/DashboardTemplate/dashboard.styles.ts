import styled from "styled-components";

/**
 * Layout
 * MH = MainHeader
 * AS = Aside
 * CT = Content
 */

export const Grid = styled.div`
  &.on {
    display: grid;
    grid-template-columns: 230px auto;
    grid-template-rows: auto;
    grid-template-areas: "AS CT";

    height: 100vh;
  }

  &.off {
    display: grid;
    grid-template-columns: 0px auto;
    grid-template-rows: auto;
    grid-template-areas: "AS CT";

    height: 100vh;
  }

  // 전체 레이아웃 모바일환경(600px 이하) 설정
  @media (max-width: 600px) {
    &.on {
      grid-template-columns: 100%;
      grid-template-rows: 100%;

      grid-template-areas: "AS";

      .mobile-off {
        display: none;
      }
    }

    &.off {
      grid-template-columns: 0px auto;
      grid-template-rows: auto;
      grid-template-areas: "AS CT";
    }
  }
`;
