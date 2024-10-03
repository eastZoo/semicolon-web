import styled from "styled-components";

export const DashboardMainLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
`;

export const DashboardMainTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const DashboardGridLayout = styled.div`
  display: grid;
  grid-template-columns: calc(100% - 640px) 1fr 2fr;
  gap: 12px;
`;
