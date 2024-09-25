"use client";

import * as S from "./line.style";

export type LineProps = {
  label?: string;
  name?: string;
};

export const Line = ({ label }: LineProps) => {
  return (
    <S.Line>
      <label>{label && label}</label>
    </S.Line>
  );
};

export const ContourLine = ({ name }: LineProps) => {
  return <S.contour name={name} />;
};
