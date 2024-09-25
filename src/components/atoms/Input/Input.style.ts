import styled, { css } from "styled-components";

interface InputProps {
  width?: string;
  size?: string;
  layout?: string;
  className?: string;
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
    border: solid ${(props) => props.theme.colors.light};
  }

  input {
    padding-left: 40px;
  }
`;

export const IconInputText = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  img {
    position: absolute;
    margin-top: 15px;
    margin-left: 12px;
    width: 20px;
    height: 20px;
  }

  input {
    width: 100%;
  }
`;

export const InputSearchBar = styled.form`
  width: 100%;
  height: 30px;
  display: flex;
  img {
    width: 15px;
    height: 15px;
  }

  input {
    width: 200px;
    border: solid 2px ${(props) => props.theme.colors.light};
    font-size: 13px;
    padding-left: 10px;
    padding-right: 30px;
  }

  button {
    position: absolute;
    background-color: ${(props) => props.theme.colors.white};
    width: 20px;
    height: 20px;
    margin-left: 170px;
    margin-top: 4px;;
  }
`;
