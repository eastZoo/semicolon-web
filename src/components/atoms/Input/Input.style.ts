import styled, {css} from "styled-components";

interface InputProps {
  width?: string;
  size?: string;
  layout?: string;
  themeType?: string;
  color?:any;
}

export const InputCommon = styled.div<InputProps>`
  display: felx;

  label {
    display: flex;
    width: ${(props) => (props.width ? props.width : "initial")};
    font-size: 1.1rem;
    align-items: center;
    gap: 6px 10px;

    .dispalyValue {
      font-size: 1.1rem;
      cursor: pointer;
    }
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
  }

  ${(props) =>
    props.color === "email" &&
    css`
    type: text;
    background-repeat: no-repeat;
    background-size: 26px;
    background-image: url('/assets/svg/email.svg');
    background-size: cover;
    display: flex;

      
    `}

  ${(props) =>
    props.color === "pw" &&
    css`
      font-size: 1.0rem;
      font-weight: 500;
      background-color: #F7E600;
      color: #3A1D1D;
      
    `}
`;
