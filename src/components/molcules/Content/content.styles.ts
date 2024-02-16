import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  overflow-y: auto;
  max-width: unset;
  height: calc(100vh - 40px);
  background-color: ${(props) => props.theme.colors.white};

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${(props) => props.theme.colors.scrollBar};
    border: 2px solid transparent;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

// 페이지 타이틀 라인 레이아웃
export const PageTitle = styled.div`
  display: flex;
  height: 40px;
  padding: 0 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.sectionBorder};
  align-items: center;
  justify-content: space-between;

  .page-title {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

// 페이지 섹션 헤더 라인 레이아웃
export const SectionHeader = styled.div`
  display: flex;
  height: 40px;
  padding: 0 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.sectionBorder};
  align-items: center;
  justify-content: flex-end;

  .page-title {
    font-size: 1.6rem;
  }

  // 화면 2단 Sided-Half 레이아웃 모바일환경(600px 이하) 설정
  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

// 화면 2단 Sided-Half 레이아웃(wrap)
export const Layout01Half = styled.div`
  display: grid;
  max-height: calc(100vh - 80px);
  grid-template-columns: 600px 1fr;

  // 화면 2단 Sided-Half 레이아웃 모바일환경(600px 이하) 설정
  @media (max-width: 600px) {
    grid-template-columns: 100% 0;

    &.mobile-input-open {
      grid-template-columns: 0 100%;
    }
  }
`;

// 화면 2단 Sided-30% 레이아웃(wrap)
export const Layout01Side30 = styled.div`
  display: grid;
  max-height: calc(100vh - 80px);
  grid-template-columns: 1fr 300px;

  // 화면 2단 Sided-30% 레이아웃 모바일환경(600px 이하) 설정
  @media (max-width: 600px) {
    grid-template-columns: 100% 0;

    &.mobile-input-open {
      grid-template-columns: 0 100%;
    }
  }
`;

// 화면 1단, 2단 Left-Side 레이아웃
export const Layout02 = styled.div`
  overflow: hidden;
  display: flex;
  min-height: calc(100vh - 80px);
  flex-direction: column;

  // 모바일 입력창 불러오기 버튼 숨기기 설정
  .mobile-button-set {
    display: none;
  }

  .grid-component {
    width: 100%;
    position: relative;
    flex-grow: 1;
    padding: 5px 15px 15px;

    // 그리드 상단 커스텀요소 설정
    .grid-top-custom {
      position: absolute;
      display: flex;
      width: calc(100% - 61px);
      height: 26px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 5;

      // 추가 커스텀 버튼 위치 설정
      .grid-btn-group {
      }

      // 데이터 Total Count 설정
      .total-count {
        font-size: 1.3rem;
        line-height: 20px;
        z-index: 10;
      }
    }

    // 그리드 위치 및 크기 설정
    .datagrid-wrap {
      overflow: hidden;
      position: absolute;
      top: 0px;
      width: calc(100% - 30px);
      height: calc(100% - 20px);
      background: ${(props) => props.theme.colors.sectionBorder};

      // 상단 커스텀 요소 없는 그리드 위치 설정
      &.no-custom {
        top: 5px;

        // + 상단 toolbar 없는 그리드 위치 설정
        &.no-toolbar {
          top: 36px;
          height: calc(100% - 5px);
        }
      }

      // 상단 커스텀 요소 있는 그리드 위치 설정
      &.has-custom {
        top: 5px;

        &.no-toolbar {
          top: 36px;
          height: calc(100% - 51px);
        }
      }

      .dx-treelist-container,
      .dx-gridbase-container {
        background: none;
      }

      .dx-treelist-header-panel,
      .dx-datagrid-header-panel,
      .dx-toolbar,
      .dx-toolbar-items-container {
        background: ${(props) => props.theme.colors.white};
      }

      // 그리드 Row 선택시 색상 설정
      tr.dx-row-focused {
        td {
          background-color: ${(props) =>
            props.theme.colors.gridFocused} !important;
        }
      }

      // 그리드 공백 회색바탕 처리
      .dx-treelist-table,
      .dx-datagrid-rowsview {
        tbody {
          background: ${(props) => props.theme.colors.sectionBorder};

          .dx-data-row {
            background: ${(props) => props.theme.colors.white};
          }

          .dx-freespace-row {
            td {
              border: none;
            }
          }
        }
      }

      // 메인 그리드 Header 색상 설정
      .dx-header-row {
        color: ${(props) => props.theme.colors.white};
        background: ${(props) => props.theme.colors.gridHeader};

        td {
          border-top: ${(props) => props.theme.colors.gridHeader};
          border-bottom: ${(props) => props.theme.colors.gridHeader};
          text-align: center !important;
          vertical-align: middle;
        }
      }
    }
  }

  // 화면 2단 Left-sided 레이아웃 모바일환경(600px 이하) 설정
  @media (max-width: 600px) {
    // 모바일 입력창 불러오기 버튼 숨기기 설정
    .mobile-button-set {
      display: flex;
    }
  }
`;

// 화면 2단 Right-Side 레이아웃
export const Layout03 = styled.div`
  overflow: hidden;
  display: flex;
  max-height: calc(100vh - 80px);
  flex-direction: column;

  // Right-Side 인풋 섹션 타이틀
  .section-title {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 1.6rem;
      font-weight: 500;
      color: ${(props) => props.theme.colors.LayoutRightTit};
    }
  }

  // 화면 2단 Right-Side 레이아웃 모바일환경(600px 이하) 설정
  @media (max-width: 600px) {
  }
`;

// 화면 2단 Right-Side-Top 레이아웃
export const Layout03Top = styled.div`
  display: flex;
  max-height: calc(100vh - 120px);
  padding: 30px;
  border-left: 1px solid ${(props) => props.theme.colors.sectionBorder};
  background: ${(props) => props.theme.colors.LayoutRightTopBg};
  flex-direction: column;
  flex-grow: 1;
`;

// 화면 2단 Right-Side-Bottom 레이아웃
export const Layout03Bottom = styled.div`
  display: flex;
  padding: 30px;
  border-top: 1px solid ${(props) => props.theme.colors.innerSectionBorder};
  border-left: 1px solid ${(props) => props.theme.colors.sectionBorder};
  background: ${(props) => props.theme.colors.LayoutRightBottomBg};
  flex-direction: column;
`;

// 화면 2단 Right-Side Input 섹션 레이아웃
export const Layout03Input = styled.div`
  overflow-y: auto;
  display: flex;
  max-height: calc(100vh - 120px);
  flex-direction: column;
`;

// 화면 2단 Right-Side Input 섹션 하단 그리드 레이아웃
export const Layout03Grid = styled.div`
  position: relative;
  margin-top: 30px;
  flex-grow: 1;

  // 데이터 Total Count 설정
  .subgrid-total {
    font-size: 1.2rem;
    z-index: 9;
  }

  // 그리드 위치 및 크기 설정
  .datagrid-wrap {
    overflow: hidden;
    position: absolute;
    top: 30px;
    width: calc(100%);
    height: calc(100% - 30px);

    .dx-treelist-container,
    .dx-gridbase-container,
    .dx-treelist-header-panel,
    .dx-datagrid-header-panel,
    .dx-toolbar,
    .dx-toolbar-items-container {
      background: none;
    }

    // 그리드 Row 선택시 색상 설정
    tr.dx-row-focused {
      td {
        background-color: ${(props) =>
          props.theme.colors.gridFocused} !important;
      }
    }

    // 그리드 공백 회색바탕 처리
    .dx-treelist-table,
    .dx-datagrid-rowsview,
    .dx-treelist-rowsview {
      background: ${(props) => props.theme.colors.sectionBorder};

      tbody {
        .dx-data-row {
          background: ${(props) => props.theme.colors.white};
        }

        .dx-freespace-row {
          td {
            border: none;
          }
        }
      }
    }

    // 서브 그리드 헤더 색상설정
    .dx-treelist-headers {
      border-bottom: none;
    }

    .dx-header-row {
      color: ${(props) => props.theme.colors.white};
      background: ${(props) => props.theme.colors.gridSubHeader};

      td {
        border-top: 1px solid ${(props) => props.theme.colors.gridSubHeader};
        border-bottom: 1px solid ${(props) => props.theme.colors.gridSubHeader};
      }
    }
  }
`;

export const TestFileLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  cursor: pointer;
`;
