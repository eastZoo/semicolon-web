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
  display: flex;
  width: 80%;
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
  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .stackGroup {
    display: flex;
    gap: 15px;
    padding: 0px;
  }
`;

export const applySection = styled.section`
  width: 30%;
  padding: 10px 0px;
`;

export const apySection = styled.section`
  margin: 50px 0px 0px 50px;
`;

export const btnSection = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 15px;
  h2 {
    font-size: 20px;
    font-weight: 500;
  }
  p {
    color: gray;
    text-align: center;
  }
  .btnGroup {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .iconGroup {
    display: flex;
    gap: 5px;
    justify-content: center;
    margin: 10px;
  }
`;

export const adSection = styled.div``;
