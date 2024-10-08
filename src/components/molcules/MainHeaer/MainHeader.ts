import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const HeaderBox = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  margin-top: auto;
  margin-bottom: auto;
`;

export const LinkGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  font-size: 13px;
  align-items: center;
  margin-left: 5%;
  a {
    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const functionGroup = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-left: auto;
`;


export const RightGroup = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-left: auto;
`;