import React from "react";
import { Container } from '../../GlobalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine } from "./styles/InfoSectionStyles";

export interface IInfoSec {
  lightBg: boolean;
}

export interface IInfo_Row{
    imgStart: string;
}

export interface IITopLine{
  lightTopLine: string;
}

export default function InfoSection({ lightBg }: IInfoSec, {imgStart} : IInfo_Row, {lightTopLine}: IITopLine) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
          <Container>
              <InfoRow imgStart={imgStart}>
                <InfoColumn>
                    <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}></TopLine>
                    </TextWrapper>
                </InfoColumn>
              </InfoRow>
          </Container>
      </InfoSec>
    </>
  );
}