"use client"

import styled from "styled-components"
import { theme } from "../../../styles/theme";

export const NoticeSection = styled.section`
    width: 80%;
    height: auto;
    align-items: center;
    justify-content: center;
`

export const NoticeHeader = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;
    
    a{
        font-size: 13px;
        margin-top: auto;
        color: ${theme.text_colors.dark};
    }

    a:hover{
        color: ${(props) => props.theme.colors.primary};
    }
`

export const NoticeBody = styled.div`
    width : 100%;
    height: auto;
`
