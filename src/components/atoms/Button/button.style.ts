import styled, { css } from "styled-components";

interface ButtonProps {
  width?: string;
  height?: number;
  color: string;
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
  background-color: #A9D0F5;
  color: #000000;

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
  }
`;
