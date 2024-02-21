import styled, { css } from "styled-components";
import {theme} from "../../../styles/theme"

interface InputProps {
  width?: string;
  size?: string;
  layout?: string;
}

export const InputCommon = styled.div<InputProps>`
  display: flex;

  label {
    display: flex;
    width: ${(props) => (props.width ? props.width : "initial")};
    font-size: 1.1rem;
    align-items: center;
    gap: 6px 10px;
  }

  input,
  textarea {
    width: ${(props) => (props.width ? props.width : "initial")};
    height: ${(props) =>
      props.size === "sm"
        ? "24px"
        : props.size === "md"
        ? "50px"
        : props.size === "xlg"
        ? "65px"
        : "unset"};
    padding: ${(props) =>
      props.size === "sm" || props.size === "md"
        ? "0 6px 2px"
        : props.size === "lg"
        ? "0 15px"
        : "0"};
    font-size: ${(props) => (props.size === "lg" ? "1.5rem" : "1.0rem")};
    border-radius: 10px;
    justify-content: center;
    border: solid ${theme.colors.light};
  }

  input{
    padding-left: 40px;
  }


`;
