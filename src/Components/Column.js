import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
export default function Column(props) {
  return (
    <BoxComponent
    sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        width:'48%',
        height:'auto',
        marginTop:'10px',
    }}
    >
       <BoxComponent
  sx={{
    width: '100%',
    height: '14vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:'10px'
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
<TypographyComponent
      textAlign="right"
      display='flex'
      fontWeight="600"
      fontSize="12px"
      >
        {props.title}
      </TypographyComponent>
    </BoxComponent>
  );
}
