
import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
import Date from './Date';

export default function DetailNews(props) {
  return (
    <BoxComponent
    borderBottom='1px solid var(--secondary)'
    marginBottom='20px'
    padding='5px'
    >
        <TypographyComponent
        fontWeight='700'
        fontSize='22px'
        textAlign='right'
        marginBottom='20px'
        width='100%'
        height='5vh'
        overflow="hidden"
        >{props.title}</TypographyComponent>
        <BoxComponent
            sx={{
                display:'flex',
                justifyContent:'space-between',
                width:'100%',
                marginTop:'10px',
            }}
        >
        <BoxComponent
        display='flex'
        flexDirection='column'
        justifyContent="flex-start"
        alignItems='flex-end'
        width="60%"
        >
        <Date/>
      <TypographyComponent
      textAlign="right"
      fontWeight="500"
      height='8vh'
      overflow="hidden"
      >
        {props.detail}
      </TypographyComponent>
      </BoxComponent>
      <BoxComponent
  sx={{
    width: '300px',
    height: '150px',
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
    </BoxComponent>
  );
}
