"use client";

import styled, { css } from "styled-components";

export const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
  
`;
export const DropdownList = styled.ul`
  width: 200%;
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
  display: block;
  z-index: 1;
`;

export const ItemGroup = styled.div`
display: flex;
`

export const ItemContent = styled.div`
margin-left: 10px;
p{
    font-size: 12px;
}
`