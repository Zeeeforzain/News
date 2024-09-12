import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
export default function Footer() {
  return (
    <BoxComponent
    backgroundColor='var(--dull)'
    display='flex'
    alignItems='center'
    justifyContent='space-evenly'
    flexDirection='column'
    color='var(--light)'
    height='12vh'
    >
      <BoxComponent
      sx={{
        display:'flex',
        width:'20%',
        justifyContent:'space-between',
        alignItems:'center',
      }}
      >
        <TypographyComponent
        width='100px'
        borderRight='1px solid var(--light)'
        sx={{cursor:'pointer'}}
        >پرائیویسی پالیسی</TypographyComponent>
        <TypographyComponent
          width='60px'
          sx={{cursor:'pointer'}}
        borderRight='1px solid var(--light)'
        >اشتہارات</TypographyComponent>
        <TypographyComponent
          width='80px'
          sx={{cursor:'pointer'}}
        >رابطہ کریں</TypographyComponent>
      </BoxComponent>
      <TypographyComponent>Copyright © 2024. All Rights Reserved</TypographyComponent>
    </BoxComponent>
  );
}
