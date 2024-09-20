import React from 'react';
import BoxComponent from './Box';
import ColumnBox from './ColumnBox';
import NewsBox from './NewsBox';

export default function CommonComponent(props) {
  return (
    <BoxComponent
    display="flex"
    justifyContent='space-evenly'
    >
     
        <BoxComponent
        width="30%"
        display={{xs:'none', sm:'none', md:'flex'}}
        >
      <ColumnBox/>
        </BoxComponent>
        <BoxComponent
        width={{xs:'90%',sm:'90%',md:"60%",lg:'60%'}}
        >
      <NewsBox title={props.title}/>
        </BoxComponent>
    </BoxComponent>
  );
}
