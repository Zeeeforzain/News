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
        >
      <ColumnBox/>
        </BoxComponent>
        <BoxComponent
        width="60%"
        >
      <NewsBox title={props.title}/>
        </BoxComponent>
    </BoxComponent>
  );
}
