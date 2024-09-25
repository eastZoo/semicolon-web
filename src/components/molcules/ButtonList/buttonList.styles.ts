"use client";

import styled, { css } from "styled-components";

interface ButtonListProps {
  subtitle?: string;
  title?: string;
  width?: string;
  height?: string;
  className?: any;
}

export const btnList = styled.div`
  height: 35px;
  background-color: #F7F7F7;
  padding: 4px;
  bottom: 10px;
  border-radius: 10px;
  position: relative;
  ul{
    display: flex;

  }
`;
