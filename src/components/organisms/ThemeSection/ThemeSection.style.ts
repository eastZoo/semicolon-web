"use client"

import styled, {css} from "styled-components"
import { theme } from "../../../styles/theme";

export const ThemeSection = styled.section`
    width: 80%;
    height: auto;
    align-items: center;
    justify-content: center;
`

export const ThemeHeader = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;

`
export const ThemeCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    padding-top: 20px;
    width: 100%;
    margin-bottom: 20px;
`

export const ThemeButton = styled.div`
  font-size: 13px;
  display: flex;
  margin-top: auto;
  a {
    justify-content: center;
    align-items: center;
    margin: auto;
    font-size: 15px;
    margin-right: 25px;
  }
  a:hover{
    color: ${(props)=> props.theme.colors.primary}
  }
  img{
    background-color: ${theme.colors.white};
  }
`;
