"use client";

import styled, { css } from "styled-components";

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
  background-color: ${(props) => props.theme.colors.cardDefault};
  color: ${(props) => props.theme.text_colors.black};
  border-radius: 10px;
  border: none;
  padding: 15px;
  display: block;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    letter-spacing: 1px;
  }
`;

export const Subtitle = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  line-height: 130%;
  font-size: 13px;
  font-weight: 510;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Category = styled.p`
  line-height: 150%;
`;

export const Stack = styled.p`
  line-height: 180%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const User = styled.span`
  font-size: 15px;
  font-weight: 430;
`;

export const colonyCardSection = styled.div<CardProps>`
  width: 100%;
  height: auto;
`;

export const colonyCard = styled.div<CardProps>`
  width: 100%;
  height: auto;
  color: ${(props) => props.theme.text_colors.black};
  border: none;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  .mainImage {
    width: 100%;
    z-index: 1;
  }

  .viewImage {
    z-index: 2;
    position: relative;
  }

  p {
    font-size: 13px;
  }
  .viewImageP {
    width: 100%;
  }

  .bookmarkP {
    display: flex;
    justify-content: space-between;
    line-height: 150%;
    font-size: 13px;
    margin-top: 10px;
  }
`;


export const ThemeCard = styled.div<CardProps>`
  width: 100%;
  height: auto;
  border-radius: 10px;
  border: none;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.cardTheme};
  align-items: center;
  justify-content: center;
  display: flex;
  p {
    font-size: 20px;
    font-weight: bold;
    margin: auto;
  }
  img {
    width: 80px;
    margin-left: auto;
  }
`;
