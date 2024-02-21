"use client"

import styled from "styled-components"
import {theme} from "../../../styles/theme"

export const BannerSection = styled.section`
    display: flex;
    width: 100%;
    height: 200px;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to bottom, #D8D8D8, #D8D8D8, #D8D8D8, #D8D8D8, #E6E6E6, white);
`

export const BannerCard = styled.div`
    display: flex;
    width: 70%;
    height: 100%;
    align-items: center;

    .swiper{
        width: 100%;
    }

    .swiper-slide{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    .swiper-pagination-bullet-active {
        color: #fff;
        background: ${theme.colors.primary};
    }
`