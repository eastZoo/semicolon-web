"use client";

import { DropdownProps } from "react-bootstrap";
import styled, { css } from "styled-components";

export const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
`;
export const DropdownList = styled.ul`
  width: 200px;
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
  a {
    display: flex;
    font-size: 14px;
    font-weight: 430;
  }
  span {
    margin-left: 15px;
  }
`;
export const DropdownItem = styled.li`
  z-index: 1;
  height: auto;
  font-weight: 300;
  input{
    color: green;
  }
`;

export const ItemGroup = styled.div`
  display: flex;
`;

export const ItemContent = styled.div`
  margin-left: 10px;
  p {
    font-size: 15px;
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
  span{
    margin-left: 5px;
  }
  p {
    margin-right: 10px;
  }
`;