"use client"

import styled, {css} from 'styled-components';

interface LinkProps {
    color?: string
    children?: any
    href?: any|string
    className?: string|any
    label?:string
  }

export const LinkWrapper = styled.a<LinkProps>`
    display: inline-flex;
    text-decoration: none;
    align-items: center;

    a: hover{
        text-decoration: none;
    }

    a: focus{
        text-decoration: none;
    }

    ${(props) =>
        props.color === "forgetPw" &&
        css`
          font-size: 1.0rem;
          font-weight: 400;
          color: #A4A4A4;
          
        `}
    ${(props) =>
        props.color === "signUp" &&
        css`
          font-size: 1.0rem;
          font-weight: 400;
          color: #81BEF7;
          margin-top: 20px;
          
        `}
`