import React from 'react';
import { useNavigate } from 'react-router-dom';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
import Date from './Date';

export default function DetailNews(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the extended page with props
    navigate('/extended', { state: { title: props.title, detail: props.detail, img: props.img } });
  };

  return (
    <BoxComponent
      borderBottom='1px solid var(--secondary)'
      marginBottom='20px'
      padding='5px'
      onClick={handleClick} // Make the entire component clickable
      sx={{ cursor: 'pointer' }} // Change cursor to pointer
    >
      <TypographyComponent
        fontWeight='700'
        fontSize='22px'
        textAlign='right'
        marginBottom='20px'
        width='100%'
        height='5vh'
        overflow="hidden"
      >
        {props.title} {/* Title passed as a prop */}
      </TypographyComponent>
      <BoxComponent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '10px',
        }}
      >
        <BoxComponent
          display='flex'
          flexDirection='column'
          justifyContent="flex-start"
          alignItems='flex-end'
          width="60%"
          marginRight='10px'
        >
          <Date />
          <TypographyComponent
            textAlign="right"
            fontWeight="500"
            height={{xs:'6vh', md:'7vh'}}
            overflow="hidden"
          >
            {props.detail} {/* Detail passed as a prop */}
          </TypographyComponent>
        </BoxComponent>
        <BoxComponent
          sx={{
            width: {xs:'150px',md:'250px', lg:'300px',xl:'400px'} ,
            height:  {xs:'80px',md:'120px', lg:'150px',xl:'200px'} ,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img 
            src={props.img} 
            alt="Detail Image" 
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
