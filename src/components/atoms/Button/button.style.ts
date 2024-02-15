import styled, { css } from "styled-components";

interface ButtonProps {
  width?: string;
  height?: number;
  size?: string;
  color: string;
  layout: string;
  rotate?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height + "px" : "initial")};
  font-weight: 450;
  font-size: ${(props) =>
    props.height && props.height >= 38
      ? "1.0rem"
      : props.height && props.height >= 32
      ? "0.8rem"
      : "0.5rem"};
  border: none;
  border-radius: ${(props) => (props.layout === "icon" ? "2px" : "15px")};
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  transition: background 0.1s ease-in-out;
  transform: ${(props) => (props.rotate ? `rotate(180deg)` : "")};
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
    props.layout === "function" &&
    css`
      opacity: 0.6;

      &:disabled {
        opacity: 0;
      }
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

  &:disabled {
    cursor: default;
    svg {
      path {
        stroke: ${(props) => props.theme.colors.white}66;
      }
    }
  }
`;
