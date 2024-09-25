"use client";

import { DropdownProps } from "react-bootstrap";
import styled, { css } from "styled-components";

interface DropdownItemProps {
  width?: string;
}

export const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
  width: 150px;
  height: auto;
`;

export const Dropdown = styled.div<DropdownItemProps>`
  width: ${(props) => props.width || "auto"};
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
  margin-bottom: 20px;
`;

export const SliderSection = styled.div`
  text-align: center;
  margin-bottom: 20px;
  height: 100px;
  #slider {
    -webkit-appearance: none;
    width: 80%;
    height: 15px;
    border-radius: 10px;
    background-color: #cef6ce;
    outline: none;
    margin: auto;
  }
  #slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #04b404;
    cursor: pointer;
  }
  p {
    margin-bottom: 20px;
  }
`;

export const DropdownBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13 8px;
`;

export const DropdownList = styled.ul`
  overflow-y: auto;
  height: 300px;
  width: 100%;
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
  justify-content: space-between;
`;

export const ItemGroup = styled.div`
  display: flex;
  padding: 0 8px;
  height: auto;
  weight: 100%;
`;

export const ItemContent = styled.div`
  width: 100%;
  justify-content: space-between;
  button {
    justify-content: space-between;
  }
  input {
    appearance: none;
    border: 1.5px solid gainsboro;
    border-radius: 0.35rem;
    width: 1.2rem;
    height: 1.2rem;
    &:checked {
      border-color: transparent;
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      background-size: 80% 80%;
      background-position: 50%;
      background-repeat: no-repeat;
      background-color: #74df00;
    }
  }
`;

export const DropdownCategory = styled.div<DropdownProps>`
  margin: 10px;
`;

export const DropdownButton = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 10px;
  width: 100px;
  height: 35px;
  margin: 10px;
  font-weight: 300;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  span {
    margin-left: 5px;
    font-size: 12px;
  }
  p {
    margin-right: 10px;
  }
`;

export const BadgesButtonGroup = styled.div`
  position: relative;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const BadgesButton = styled.ul`
  display: flex;
  align-itmes: center;
  overflow-x: auto;
  gap: 10px;
`;

export const BadgesList = styled.li`
  white-space: nowrap;
  white-space-collapse: collapse;
  text-wrap: nowrap;
`;
