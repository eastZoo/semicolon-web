"use client";

import { DropdownProps } from "react-bootstrap";
import styled, { css } from "styled-components";

export const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
`;

export const Dropdown = styled.div`
  width: 500px;
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
  margin: 15px;
`;

export const DropdownMiddle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DropdownList = styled.ul`
  overflow-y: auto;
  height: 300px;
  width: 50%;
  padding: 0 8px;
  a {
    display: flex;
    font-size: 14px;
    font-weight: 430;
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
  width: 100%;
  input {
    color: green;
  }
`;

export const ItemGroup = styled.div`
  display: flex;
`;

export const ItemContent = styled.div`
  width: 100%;
  justify-content: space-between;
  p {
    font-size: 16px;
  }
  button{
    justify-content: space-between;
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
