"use client"

import styled, { css } from "styled-components";
import { theme } from "../../../styles/theme"

interface ButtonProps {
  width?: string;
  height?: number;
  color?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height + "px" : "initial")};
  font-weight: 500;
  border: none;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${theme.colors.primary};
  color: ${theme.text_colors.black};

    ${(props) =>
    props.color === "kakaoBg" &&
    css`
      background-color: #F7E600;
      color: #3A1D1D;
      
    `}

    ${(props) =>
        props.color === "GoogleBg" &&
        css`
          background-color: #EFEFEF;
          color: black;
        `}
    ${(props) =>
        props.color === "findColony" &&
        css`
          width: 150px;
          height: 40px;
          border-radius: 50px;
          font-size: 15px;
          font-weight: normal;
          margin-top: auto;
        `}
    ${(props) =>
        props.color === "themeBtn" &&
        css`
          background-color: white;
          border-radius: 100%;
          margin-top: auto;
        `}
    ${(props) =>
        props.color === "findColony_disable" &&
        css`
          width: 150px;
          height: 40px;
          border-radius: 50px;
          font-size: 15px;
          font-weight: normal;
          margin-top: auto;
          background-color: ${theme.colors.btnDisable};
          color: ${theme.colors.gray};
        `}
  }
`;
