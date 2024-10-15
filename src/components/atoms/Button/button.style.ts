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
    `}

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

    ${(props) =>
    props.color === "baseDropdown" &&
    css`
      width: auto;
      color: black;
      font-weight: 300;
      background-color: white;
    `}

    ${(props) =>
    props.color === "mainDropdown" &&
    css`
      width: auto;
      height: 50px;
      font-size: 16px;
      font-weight: 400;
      color: black;
      background-color: white;
      padding: 12px 12px 12px 12px;
      img {
        width: 25px;
        height: 25px;
        z-index: 1;
      }
      &:hover {
        background-color: ${(props) => props.theme.colors.btnDisable};
        color: ${(props) => props.theme.colors.black};
      }
    `}

    ${(props) =>
    props.color === "resetButton" &&
    css`
      width: auto;
      height: 40px;
      font-size: 14px;
      color: black;
      font-weight: 400;
      border-radius: 5px;
      padding: 7px;
      margin-right: 4px;
      background-color: #f2f2f2;
    `}

    ${(props) =>
    props.color === "submitButton" &&
    css`
      width: auto;
      color: white;
      font-weight: 400;
      font-size: 14px;
      border-radius: 5px;
      padding: 7px;
      margin-left: 4px;
      background-color: #04b404;
    `}
    ${(props) =>
    props.color === "badgesButton" &&
    css`
      width: 10%;
      color: gray;
      border-radius: 5px;
      padding: 7px;
      margin-right: 3px;
      margin-left: 3px;
      font-size: 13px;
      font-weight: 400;
      background-color: #a9f5a9;
    `}
    ${(props) =>
    props.color === "btnList" &&
    css`
      width: auto;
      color: black;
      border-radius: 5px;
      padding: 7px;
      margin-right: 3px;
      margin-left: 3px;
      font-size: 12px;
      font-weight: 350;
      background-color: #f7f7f8;
      &:hover {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.dark};
        font-weight: 500;
      }
    `}
    ${(props) =>
    props.color === "stackButton" &&
    css`
      width: auto;
      font-size: 14px;
      color: black;
      font-weight: 300;
      border: 1px solid ${(props) => props.theme.colors.light};
      border-radius: 5px;
      padding: 12px;
      background-color: ${(props) => props.theme.colors.white};
      &:hover {
        background-color: #f2f2f2;
        color: ${(props) => props.theme.colors.dark};
        font-weight: 400;
      }
      &:active {
        background-color: #f2f2f2;
        color: ${(props) => props.theme.colors.dark};
        font-weight: 400;
      }
    `}
    ${(props) =>
    props.color === "tagButton" &&
    css`
      width: auto;
      font-size: 12px;
      color: ${(props) => props.theme.colors.dark};
      font-weight: 300;
      border-radius: 10px;
      padding: 7px;
      background-color: #f2f2f2;
    `}
`;

export const IconButton = styled.button`
  display: flex;
  border: none;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.white};
  ${(props) =>
    props.color === "logoButton" &&
    css`
      width: 200px;
    `}
  ${(props) =>
    props.className === "write" &&
    css`
      margin-bottom: 40px;
    `}
`;
