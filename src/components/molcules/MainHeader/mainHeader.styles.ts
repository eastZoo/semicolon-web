import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  display: flex;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.secondary};
`;

// 좌측 메뉴 Toggle 버튼
export const MenuBtn = styled.button`
  display: flex;
  padding: 3px 6px;
  border: none;
  background: none;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &.on {
    visibility: hidden;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  svg {
    rect {
      fill: #fff;
    }
  }
`;

// 우측 로그아웃 Toggle 버튼
export const Profile = styled.div`
  padding: 3px 4px 3px 8px;
  color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: all 0.2s ease;
  }
`;

// 사용자명 설정
export const UsernameWrapper = styled.span`
  display: flex;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 24px;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 5px;
    path:last-of-type {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`;

// 유저 업체명
export const UserCompany = styled.span`
  margin-right: 5px;
  color: #d4d4d4;
  font-size: 1.2rem;
  font-weight: 300;
`;

export const UserName = styled.span``;

// 로그아웃 팝업 버튼
export const ButtonPopup = styled.div`
  position: absolute;
  overflow: hidden;
  display: flex;
  top: 40px;
  right: 10px;
  padding: 10px 0;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
  justify-content: center;
  flex-direction: column;
  transition: all 0.2s ease;
  z-index: 10;
`;

export const PopupBtn = styled.button`
  display: flex;
  height: 40px;
  padding: 0 20px 0 18px;
  font-size: 1.5rem;
  border: none;
  background-color: ${(props) => props.theme.colors.white};
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.whiteShade};
    transition: all 0.2s ease;

    span {
      color: ${(props) => props.theme.colors.primary};
    }

    svg {
      path:nth-child(2) {
        fill: ${(props) => props.theme.colors.primary};
        transition: all 0.2s ease;
      }

      rect {
        fill: ${(props) => props.theme.colors.primary};
        transition: all 0.2s ease;
      }
    }
  }

  span {
    margin: 2px 3px 0 5px;
    color: #313949;
  }

  svg {
    path:nth-child(2) {
      fill: #313949;
      transition: all 0.2s ease;
    }

    rect {
      fill: #313949;
      transition: all 0.2s ease;
    }
  }
`;
