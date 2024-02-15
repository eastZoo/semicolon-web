"use client"

import styled from 'styled-components';

export const Line = styled.div`
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: gray;
    font-size: 13px;

    &::before,
    &::after{
        content: '';
        flex-grow: 1;
        background-color: gray;
        height: 1px;
        line-height: 0px;
        margin: 0 16px;
    }
`;