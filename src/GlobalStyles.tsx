import styled, { createGlobalStyle } from "styled-components";
import { DataButton } from "./Interfaces/Interfaces";

export const VariableColors = {
    
    bgBlack: "black",
    ColorWhite: "#fff",
    colorBlack: "#101522",
    colorBlue: "#4B59F7",
    colorBlue2: "#0467FB"
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

  export const Button = styled.button<DataButton>`
    border-radius: 4px;
    margin-top: 20px;
    background: ${e => (e.primary ? `${VariableColors.colorBlue}` : `${VariableColors.colorBlue2}`) };
    white-space: nowrap; 
    padding: ${x => (x.big ? "12px 64px" : "10px 20px")};
    color: ${VariableColors.ColorWhite};
    font-size: ${z => (z.fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover{
      transition:  all 0.3s ease-out;
      background-color: ${VariableColors.ColorWhite};
      background: ${e => (e.primary ? `${VariableColors.colorBlue2}` : `${VariableColors.colorBlue}`) };
    }

    @media screen and (max-width: 960px){
      width: 100%;
    }
  `;

export default GlobalStyle;