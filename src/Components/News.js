import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';

export default function News(props) {
  return (
    <BoxComponent
    sx={{
        display:'flex',
        justifyContent:'space-between',
        width:'98%',
        height:'15vh',
        marginTop:'10px',
        borderBottom:'1px solid var(--secondary)'
    }}
    >
      <TypographyComponent
      textAlign="right"
      display='flex'
      justifyContent=""
      width="70%"
      fontWeight="600"
      >
        {props.title}
      </TypographyComponent>
      <BoxComponent
  sx={{
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <img 
    src={props.img}
    alt="Logo"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'center'
    }}
  />
</BoxComponent>

    </BoxComponent>
  );
}
