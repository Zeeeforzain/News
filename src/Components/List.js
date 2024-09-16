import React from 'react';
import { List as MUIList, ListItem as MUIListItem } from '@mui/material';


export default function ListComponent(props) {
  return (
    <MUIList {...props}>
      {props.items.map((item, index) => (
        <MUIListItem key={index}
        sx={{
            padding:'0px',
            width:'auto', 
            border:'2px solid red',
            '&:hover':{
          textDecoration:'none',
          cursor:'pointer'
        }}}
        >
          {item}
        </MUIListItem>
      ))}
    </MUIList>
  );
}
