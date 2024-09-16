import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
export default function Title(props) {
  return (
    <BoxComponent>
      <TypographyComponent
    {...props}
      >
      نئی نیوز
      </TypographyComponent>
    </BoxComponent>
  );
}
