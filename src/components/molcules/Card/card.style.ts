"use client"

import styled, {css} from "styled-components";

interface CardProps {
  subtitle?: string;
  title?: string;
  width?: string;
  height?: string;
  className?: any;
}

export const bannerCardSection = styled.div<CardProps>`
  width: 30%;
  height: auto;
  font-size: 15px;
  font-weight: 300px;
  align-items: center;
  justify-content: center;

`;

export const bannerCard = styled.div<CardProps>`
  background-color: #F2F2F2;
  color: black;
  border-radius: 10px;
  border:none;
  padding: 15px;
  display: block;
      
  p{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    letter-spacing: 1px
  }
`;

export const colonyCardSection = styled.div<CardProps>`
  width: 100%;
  height: auto;
      
`;


export const colonyCard = styled.div<CardProps>`
      width: 100%;
      height: auto;
      color: black;
      border:none;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;

      .mainImage{
        width: 100%;
        z-index: 1;
      }

      .viewImage{
        z-index: 2;
        position: relative;
      }

    p{
      font-size: 13px;
    }
`;
export const ThemeCard = styled.div<CardProps>`
      width: 100%;
      height: auto;
      border-radius: 10px;
      border:none;
      padding: 15px;
      background-color: #FFBAC2;
      align-items: center;
      justify-content: center;
      display: flex;
      p{
        font-size: 20px;
        font-weight: bold;
        margin: auto;
      }
      img{
        width: 80px;
        margin-left: auto;
      }
`;