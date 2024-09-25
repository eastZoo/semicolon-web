"use client"

import styled, { css } from "styled-components";

interface LineProps {
  name?: string;
}

export const Line = styled.div`
  width: 420px;
  align-items: center;
  text-align: center;
  color: gray;
  font-size: 13px;
  position: relative;
  margin-top: 5px;
  margin-bottom: 5px;

  &::before,
  &::after {
    content: "";
    top: 50%;
    position: absolute;
    width: calc(43% - 5px);
    flex-grow: 1;
    background-color: ${(props) => props.theme.colors.dark};
    height: 1px;
    font-size: 0px;
    margin: 0 16px;
  }

  &::before {
    left: 0;
    transform: translateX(-5%);
  }

  &::after {
    right: 0;
    transform: translateX(5%);
  }
`;

export const contour = styled.div<LineProps>`
  border-top: 1px solid #dfdfdf;
  margin: 13px 0px;
  ${(props) =>
    props.name === "findColonyTop" &&
    css`
      background-color: #121212;
      color: black;
      width: 80%;
    `}
`;