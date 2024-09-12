import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
export default function Footer() {
  return (
    <BoxComponent>
      <BoxComponent>
        <TypographyComponent>رابطہ کریں</TypographyComponent>
        <TypographyComponent>اشتہارات</TypographyComponent>
        <TypographyComponent>پالیسی</TypographyComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
