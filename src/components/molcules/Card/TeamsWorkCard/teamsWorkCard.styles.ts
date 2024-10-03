import styled from "styled-components";
import "swiper/css";

export const TeamsWorkCardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  .swiper {
    width: 100%;
    margin: 0;
    padding: 12px 2px;

    .swiper-wrapper {
      width: 100%;

      .swiper-slide {
        border-radius: 6px;
        box-shadow: ${(props) => props.theme.shadow.card};
      }
    }
  }
`;

export const TeamsWorkCardTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const TeamsWorkCardContentLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;

  padding: 12px;
`;

export const TeamsWorkCardContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;

  font-size: 0.9rem;
  font-weight: 500;

  .profileBox {
    display: flex;
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background: ${(props) => props.theme.colors.primary};
    justify-content: center;
    align-items: center;
  }
`;

export const TeamsWorkCardContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 6px;

  .task-text {
    width: calc(100% - 80px);
    height: fit-content;
    font-size: 0.7rem;
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
    word-break: break-all;
  }

  .status-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 6px;

    .status {
      width: 8px;
      height: 8px;
      background: ${(props) => props.theme.colors.primary};
      border-radius: 100%;
    }
  }
`;
