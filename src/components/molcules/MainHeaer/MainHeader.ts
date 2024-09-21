import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  display: flex;
  gap: 32px;
`;

export const HeaderRight = styled.div`
  display: flex;
  gap: 12px;

  .inputBox {
    padding: 4px 12px;
    background: ${(props) => props.theme.colors.lightGray};
    border-radius: 6px;
    font-size: 1.1rem;
    font-weight: 300;
    color: ${(props) => props.theme.text_colors.lightGray};
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  gap: 24px;

  a {
    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
`;
