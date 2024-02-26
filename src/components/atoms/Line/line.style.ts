"use client"

import styled from 'styled-components';

export const Line = styled.div`
  width: 420px;
  align-items: center;
  text-align: center;
  color: gray;
  font-size: 13px;
  position: relative;
  margin-top: 5px;
  margin-bottom: 5px;

  &::before,
  &::after {
    content: "";
    top: 50%;
    position: absolute;
    width: calc(43% - 5px);
    flex-grow: 1;
    background-color: ${(props) => props.theme.colors.dark};
    height: 1px;
    font-size: 0px;
    margin: 0 16px;
  }

  &::before {
    left: 0;
    transform: translateX(-5%);
  }

  &::after {
    right: 0;
    transform: translateX(5%);
  }
`;

export const contour = styled.div`
  border-top: 1px solid #DFDFDF;
  margin: 13px 0px;
`;