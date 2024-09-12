import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
import './Theming.css';
export default function Head() {
  return (
    <BoxComponent
        backgroundColor='var(--dull)'
        padding={{xs:'10px 10px', md:'10px 20px', lg:'5px 100px'}}
        sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}
    >
              <BoxComponent 
      sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'12%',

      }}
      >
        <img src="Images/yt.png" alt="" width={'30px'} height={'30px'}/>
        <img src="Images/insta.png" alt="" width={'30px'} height={'30px'}/>
        <img src="Images/twitter.png" alt="" width={'30px'} height={'30px'}/>
        <img src="Images/fb.png" alt="" width={'30px'} height={'30px'}/>
      </BoxComponent>
      <TypographyComponent
      fontFamily='var(--main)'
      color='var(--light)'
    >
      جمعرات، 12 ستمبر 2024
      </TypographyComponent>
    </BoxComponent>
  );
}
