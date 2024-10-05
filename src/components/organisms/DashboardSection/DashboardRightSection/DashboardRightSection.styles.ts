import styled from "styled-components";

export const DashboardRightLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const CalendarLayout = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: ${(props) => props.theme.shadow.card};
  border-radius: 6px;
  padding: 12px;

  .react-calendar {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    text-align: center;

    border: none;

    .react-calendar__navigation {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      font-size: 1.2rem;
      font-weight: 500;
    }

    .react-calendar__viewContainer {
      display: flex;
      gap: 12px;

      abbr {
        font-size: 1rem;
        font-weight: 400;
      }

      .react-calendar__month-view__weekdays {
        padding: 6px 0;
      }

      .react-calendar__tile {
        padding: 10px 0;
      }

      .react-calendar__tile--now {
        background: ${(props) => props.theme.colors.primary}6F;
        color: ${(props) => props.theme.colors.white};
        border-radius: 4px;
      }

      .react-calendar__tile--active {
        background: none;
        border: 1px solid ${(props) => props.theme.colors.primary}6F;
        color: ${(props) => props.theme.colors.primary};
        border-radius: 4px;
      }
    }

    .row-task {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 4px;
    }
  }
`;

export const CalendarTaskView = styled.div<{ userColor: string }>`
  width: 6px;
  height: 6px;

  background: ${(props) => props.userColor};
  border-radius: 100%;
`;
