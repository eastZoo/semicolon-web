import styled from "styled-components";

export const TodayTaskCardLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 30px minmax(calc(100vh - 448px), auto) 40px;
  gap: 14px;

  box-shadow: ${(props) => props.theme.shadow.card};
  border-radius: 6px;
  padding: 12px;
`;

export const TodayTaskCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    font-size: 0.9rem;
    font-weight: 400;
  }
`;

export const TodayTaskCardTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

export const TodayTaskCardContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TodayTaskCardContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  border: 1px solid ${(props) => props.theme.colors.light};
  border-radius: 4px;
  padding: 6px;

  .light-text {
    color: ${(props) => props.theme.colors.gray};
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

export const TodayTaskCardUpper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const TodayTaskCardContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .status-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
  }
`;

export const ContentTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
`;

export const StatusAlarm = styled.div<{ status: string }>`
  width: 6px;
  height: 6px;
  border-radius: 100%;

  background: ${(props) =>
    props.status === "new"
      ? props.theme.status.new
      : props.status.includes("progress")
      ? props.theme.status.progress
      : props.theme.status.done};
`;

export const ContentStatusText = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
`;

export const TaskAddButtonLayout = styled.button`
  font-size: 0.9rem;
  text-align: center;

  border: 1px dashed ${(props) => props.theme.colors.light};
  padding: 6px;
`;
