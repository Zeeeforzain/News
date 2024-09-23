import React from 'react';
import BoxComponent from './Box';
import './Theming.css';
import Date from './Date';
export default function Head() {
  return (
    <BoxComponent
        backgroundColor='var(--dull)'
        padding={{xs:'10px 10px', md:'10px 20px', lg:'5px 100px'}}
        sx={{
            display:{xs:'none', sm:'flex'},
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
        <img style={{cursor:'pointer'}} src="Images/yt.png" alt="" width={'30px'} height={'30px'}/>
        <img style={{cursor:'pointer'}} src="Images/insta.png" alt="" width={'30px'} height={'30px'}/>
        <img style={{cursor:'pointer'}} src="Images/twitter.png" alt="" width={'30px'} height={'30px'}/>
        <img style={{cursor:'pointer'}} src="Images/fb.png" alt="" width={'30px'} height={'30px'}/>
      </BoxComponent>
      <Date
      color='var(--light)'
      />
    </BoxComponent>
  );
}
