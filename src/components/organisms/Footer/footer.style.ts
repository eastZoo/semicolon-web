import styled from "styled-components";

export const Footer = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    color: ${(props) => props.theme.text_colors.dark};
`

export const FooterContainer = styled.div`
    width: 70%;
`

export const FooterBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const FooterInfo = styled.div`
    font-size: 14px;
    line-height: 20px;
    p{
        font-weight: 200;
    }
`

export const FooterLink = styled.div`
    display: flex;
`

export const FooterLinkUl = styled.ul`
    line-height: 20px;
    margin-left: 30px;
`

export const FooterLinkLi = styled.li`
    font-size: 14px;
    font-weight: 300;
    a:hover{
        color: ${(props) => props.theme.colors.primary};
    }
`