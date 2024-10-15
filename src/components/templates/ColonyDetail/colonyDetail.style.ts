import styled, { css } from "styled-components";

export const ColonyDetailPage = styled.section`
  display: flex;
  width: 100vw;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ColonyDetailMain = styled.section`
  display: felx;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

export const decSection = styled.section`
  width: 70%;
`;

export const decMain = styled.div`
  padding: 10px 0px 10px 0px;
  h1 {
    font-weight: 600;
    font-size: 30px;
  }
  p {
    color: gray;
    margin-bottom: 20px;
  }
  div {
    display: flex;
    gap: 15px;
  }
`;
export const decSub = styled.div`
  div {
    padding: 20px 0px 20px 0px;
  }
  h2{
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
  }
`;

export const applySection = styled.section`
  width: 20%;
`;
export const btnSection = styled.div``;
