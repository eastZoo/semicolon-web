"use client";

import styled, { css } from "styled-components";

export const FindColonySection = styled.section`
  width: 70%;
  align-items: center;
  justify-content: center;
`;

export const FindColonyHeader = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
`;

export const FindColonyCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  ${(props) =>
    props.color === "findColonyPage" &&
    css`
      width: auto;
      color: black;
      font-weight: 300;
      background-color: white;
      grid-gap: 20px;
    `}
`;
