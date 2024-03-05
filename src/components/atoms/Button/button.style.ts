"use client";

import styled, { css } from "styled-components";

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
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

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
        &:hover {
          background-color: ${(props) => props.theme.colors.white};
          color: ${(props) => props.theme.colors.primary};
        }
      `}]

    ${(props) =>
      props.color === "themeBtnPrev" &&
      css`
        background-color: #efefef;
        color: ${(props) => props.theme.colors.white};
        margin-top: auto;
      `}

    ${(props) =>
      props.color === "themeBtnNext" &&
      css`
        background-color: #efefef;
        color: ${(props) => props.theme.colors.white};
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
        background-color: ${(props) => props.theme.colors.btnDisable};
        color: ${(props) => props.theme.colors.gray};
      `}
    ${(props) =>
      props.color === "mainLogin" &&
      css`
        width: 100px;
        height: 30px;
        font-size: 12px;
        &:hover {
          background-color: ${(props) => props.theme.colors.white};
          color: ${(props) => props.theme.colors.primary};
        }
      `}
    ${(props) =>
      props.color === "dropdown_dashboard" &&
      css`
        height: 30px;
        font-size: 13px;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 10px;
      `}
  }
`;

export const IconButton = styled.button`
  display: flex;
  border: none;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.white};
  ${(props) =>
    props.color === "logoButton" &&
    css`
      width: 200px;
    `}
`;
