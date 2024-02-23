"use client"

import styled, {css} from "styled-components";

interface CardProps {
    text?: string;
    src?: string;
    className?: any;
}

export const FindImageBox = styled.div<CardProps>`
  width: auto;
  height: auto;
  font-size: 10px;
  align-items: center;
  display: flex;
  position: absolute;
  color: white;

  img{
      margin: 5px;
  }
`;

export const BookImageBox = styled.div<CardProps>`
  display: flex;
  text-align: center;
  font-size: 15px;
  color: #8C8C8C;
  img{
      width: 18px;
      margin-right: 5px;
  }
`;