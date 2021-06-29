import styled from "styled-components";
import { VariableColors } from "../../../GlobalStyles";
import { home_ObjOne, Info_Row, Top_Line } from "../../../Interfaces/Interfaces";

export const InfoSec = styled.div<home_ObjOne>`
    color: ${VariableColors.ColorWhite};
    padding: 160px 0;
    background: ${x => (x.lightBg ? `${VariableColors.ColorWhite}` : `${VariableColors.colorBlack}`)}; 
`;

export const InfoRow = styled.div<Info_Row>`
    display:flex;
    margin: 0 -15px -15px -15px;
    align-items: center;
    flex-direction: ${imgStrat => ( imgStrat ? "row-reverse" : "row")};
`
export const InfoColumn = styled.div`
    margin-bottom:  15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px){
        padding-bottom: 65px;
    }
`

export const TopLine = styled.div<Top_Line>`
    color: ${lightTopLine => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
    font-size: 18px;
    line-height: 16px;
    letter-spacing:  1.4px;
    margin-bottom: 16px;
`