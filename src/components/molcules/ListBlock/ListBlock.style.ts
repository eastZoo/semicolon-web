"use client"

import styled, {css} from "styled-components";

interface ListProps {
    title?: string;
    user?: string;
    date?: string;
}

export const NoticeList = styled.div<ListProps>`
  font-size: 15px;
  justify-content: space-between;
  display: flex;

`;