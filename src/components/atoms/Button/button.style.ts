import styled, { css } from "styled-components";

interface ButtonProps {
  width?: string;
  height?: number;
  size?: string;
  color: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height + "px" : "initial")};
  font-weight: 450;
  border: none;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  background-color: #A9D0F5;
  color: #0B0B3B;
  

  ${(props) =>
    props.size === "sm" &&
    css`
      height: 20px;
      padding: 0 10px;
      font-size: 0.9rem;
    `}

  ${(props) =>
    props.size === "md" &&
    css`
      height: 25px;
      padding: 0 10px;
      font-size: 1.0rem;
    `}

    ${(props) =>
    props.color === "kakaoBg" &&
    css`
      font-size: 1.0rem;
      font-weight: 500;
      background-color: #F7E600;
      color: #3A1D1D;
      
    `}

    ${(props) =>
        props.color === "GoogleBg" &&
        css`
          font-size: 1.0rem;
          font-weight: 500;
          background-color: #EFEFEF;
          color: black;
        `}
  }
`;
