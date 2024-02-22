import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  overflow-y: auto;
  max-width: unset;
  height: calc(100vh);
  background-color: ${(props) => props.theme.colors.white};

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${(props) => props.theme.colors.scrollBar};
    border: 2px solid transparent;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
