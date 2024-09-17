import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';

export default function Headlines(props) {
  return (
    <BoxComponent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: props.width,
        height: 'auto',
        marginTop: '10px',
      }}
    >
      <BoxComponent
        sx={{
          width: '100%',
          height: '28vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '10px',
        }}
      >
        <img
          src={props.img}
          alt="Logo"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </BoxComponent>
      <TypographyComponent
        textAlign="right"
        display='flex'
        fontWeight="700"
        fontSize="23px"
      >
        {props.title}
      </TypographyComponent>
    </BoxComponent>
  );
}
