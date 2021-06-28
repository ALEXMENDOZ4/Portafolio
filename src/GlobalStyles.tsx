import styled, { createGlobalStyle } from "styled-components";

export const VariableColors = {
    
    bgBlack: "black",
    ColorWhite: "#fff",
    colorBlack: "#101522",
    colorBlue: "#4b59f7"
} 

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Source Sans Pro", sans-serif;
    }

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export default GlobalStyle;