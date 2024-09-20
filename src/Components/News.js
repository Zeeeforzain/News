import React from 'react';
import { useNavigate } from 'react-router-dom';
import BoxComponent from './Box';
import TypographyComponent from './Typography';

export default function News(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/extended', { state: { title: props.title, detail: props.detail, img: props.img } });
  };

  return (
    <BoxComponent
      onClick={handleClick}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '98%',
        height: '15vh',
        marginTop: '10px',
        borderBottom: '1px solid var(--secondary)',
        cursor: 'pointer', // Indicate it's clickable
      }}
    >
      <TypographyComponent
        textAlign="right"
        display='flex'
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
