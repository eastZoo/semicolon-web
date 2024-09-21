import styled from "styled-components";

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const LoginButtonLayout = styled.div`
  width: calc(100vw - 80vw);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;

  padding: 8px 12px;
  border-radius: 6px;
  border: ${(props) => (props.color === "kakao" ? "none" : "1px solid")};
  background: ${(props) => (props.color === "kakao" ? "#f7e600" : "white")};
  color: ${(props) => (props.color === "kakao" ? "#3a1d1d" : "black")};
  box-shadow: ${(props) => props.theme.shadow.login};

  font-weight: 300;
`;
