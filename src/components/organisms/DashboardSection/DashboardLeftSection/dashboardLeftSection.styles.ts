import styled from "styled-components";

export const DashboardLeftSectionLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const DashboardAnnounceCardLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  box-shadow: ${(props) => props.theme.shadow.card};
  padding: 12px;
  border-radius: 6px;
`;

export const AnnouncedCardTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const AnnouncedCardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const AnnouncedCardContentText = styled.p`
  font-size: 0.8rem;
`;
