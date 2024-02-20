"use client"

import styled, {css} from "styled-components";

interface CardProps {
    text?: string;
    src?: string;
    className?: any;
}

export const FindImageBox = styled.div<CardProps>`
  width: 30px;
  height: auto;
  font-size: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  color: white;
  margin-top: 150px;
  margin-left: 220px;

  img{
      margin: 5px;
  }
`;

export const BookImageBox = styled.div<CardProps>`
  display: flex;
  font-size: 10px;
  text-align: center;
  font-size: 15px;
  color: #8C8C8C;
  img{
      width: 18px;
      margin-right: 5px;
  }
`;