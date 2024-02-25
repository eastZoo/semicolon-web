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
        background-color: #f7e600;
        color: #3a1d1d;
      `}

    ${(props) =>
      props.color === "GoogleBg" &&
      css`
        background-color: #efefef;
        color: black;
      `}
    ${(props) =>
      props.color === "findColony" &&
      css`
        width: 150px;
        height: 40px;
        border-radius: 50px;
        font-size: 15px;
        font-weight: 500;
        margin-top: auto;
      `}]

    ${(props) =>
      props.color === "themeBtnPrev" &&
      css`
        background-color: #efefef;
        color: #ffffff;
        margin-top: auto;
      `}

    ${(props) =>
      props.color === "themeBtnNext" &&
      css`
        background-color: #efefef;
        color: #ffffff;
        margin-top: auto;
        margin-left: 10px;
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
