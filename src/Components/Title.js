import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
export default function Title() {
  return (
    <BoxComponent>
      <TypographyComponent
      sx={{
        fontFamily:'var(--main)',
        fontSize:{xs:'20px', md:'35px', lg:'50px'},
        color:'var(--info)',
      }}
      >
      جاوید چوہدری
      </TypographyComponent>
    </BoxComponent>
  );
}
