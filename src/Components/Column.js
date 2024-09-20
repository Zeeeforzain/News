import React from 'react';
import { useNavigate } from 'react-router-dom';
import BoxComponent from './Box';
import TypographyComponent from './Typography';

export default function Column(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/extended', { state: { title: props.title, detail: props.detail, img: props.img } });
  };

  return (
    <BoxComponent
      onClick={handleClick}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '48%',
        height: 'auto',
        marginTop: '10px',
        cursor: 'pointer', // Indicate it's clickable
      }}
    >
      <BoxComponent
        sx={{
          width: '100%',
          height: '14vh',
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
      <TypographyComponent
        textAlign='justify'
        fontSize="25px"
        fontFamily="var(--main)"
        color="var(--dull)"
        overflow='hidden'
        width='0px'
        height='0px'
      >
        {props.detail} {/* Assuming details are passed as props */}
      </TypographyComponent>
    </BoxComponent>
  );
}
