import styled, { css } from "styled-components";

export const FindColonyPage = styled.section`
  display: flex;
  width: 100vw;
  height: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CategorySection = styled.div`
  display: flex;
  width: 80%;
  height: 170px;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: sticky;
  top: 0px;
  z-index: 2;
`;

export const ColonyMainSection = styled.section`
  width: 80%;
  display: flex;

  ${(props) =>
    props.className === "loading" &&
    css`
      width: 100%;
    `}
`;

export const ColonyMoreButton = styled.div`
  width: 6%;
  height: auto;
  position: fixed;
  right: 10px;
  bottom: 30px;
  margin-left: 10px;
  img {
    width: 50px;
  }
`;

export const hiddenButtonGroup = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  img {
    width: 40px;
  }
`;

export const loadingSection = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TopRightSection = styled.div`
  width: 80%;
`;
