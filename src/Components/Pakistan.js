import React from 'react';
import ColumnBox from './ColumnBox';
import NewsBox from './NewsBox';
import BoxComponent from './Box';

export default function Pakistan() {
  return (
    <BoxComponent
    display='flex'
    width='100%'
    justifyContent='space-evenly'
    >
      <ColumnBox title='کالم'/>
      <NewsBox title='پاکستان'/>
</BoxComponent>
  );
}
