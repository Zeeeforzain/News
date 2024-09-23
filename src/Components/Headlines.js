import React from 'react';
import { useNavigate } from 'react-router-dom';
import BoxComponent from './Box';
import TypographyComponent from './Typography';

export default function Headlines(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/details', { state: { title: props.title, detail: props.detail, img: props.img } });
  };

  return (
    <BoxComponent
      onClick={handleClick}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: props.width,
        height: '40vh',
        marginTop: '10px',
        cursor: 'pointer', // Indicate it's clickable
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
        display='flex'
        justifyContent='flex-end'
        textAlign='right'
        fontWeight="700"
        fontSize="23px"
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
