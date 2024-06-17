"use client";

import { DropdownProps } from "react-bootstrap";
import styled, { css } from "styled-components";

export const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
`;

export const Dropdown = styled.div`
  width: 400px;
  height: auto;
  position: absolute;
  top: 100%;
  z-index: 2;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  list-style: none;
  padding: 13px;
  margin-top: 10px;
  box-shadow: 1px 2px 5px 2px ${(props) => props.theme.colors.gray};
`;

export const DropdownTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DropdownMiddle = styled.div`
  display: flex;
`;

export const DropdownList = styled.ul`
  a {
    display: flex;
    font-size: 14px;
    font-weight: 430;
  }
  span {
    margin: 15px;
  }
  ${(props) =>
    props.color === "middle" &&
    css`
      position: relative;
      display: flex;
      justify-content: space-between;
    `}
`;
export const DropdownItem = styled.li`
  z-index: 1;
  height: auto;
  font-weight: 300;
  input {
    color: green;
  }
`;

export const ItemGroup = styled.div`
  display: flex;
`;

export const ItemContent = styled.div`
  margin-left: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  justify-content: space-between;
  p {
    font-size: 16px;
  }
`;

export const DropdownCategory = styled.div<DropdownProps>`
  margin: 10px;
`;

export const DropdownButton = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 5px;
  width: auto;
  height: 40px;
  margin: 10px;
  font-weight: 300;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  span {
    margin-left: 5px;
  }
  p {
    margin-right: 10px;
  }
`;
