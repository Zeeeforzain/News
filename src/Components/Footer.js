import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
import ListComponent from './List';
export default function Footer() {
  const items = [
    { label: "پرائیویسی پالیسی",  },
    { label: '|',  },
    { label: "اشتہارات",  },
    { label: "|",  },
    { label: "رابطہ کیجئے", },
  ];


  return (
    <BoxComponent
    backgroundColor='var(--dull)'
    display='flex'
    alignItems='center'
    justifyContent='space-evenly'
    flexDirection='column'
    color='var(--light)'
    height='12vh'
    >
      <BoxComponent
      sx={{
        width:{xs:'60%',sm:'40%', md:'20%', xl:'12%'},
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
      }}
      >
        <ListComponent
        sx={{
          width:'100%',
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-around',
          alignItems:'center',
          fontSize:'12px'
        }}
              items={items.map((item) => (
                <li key={item.label}>
                    {item.label}
                </li>
              ))}
            />
      </BoxComponent>
      <TypographyComponent
      fontSize="12px"
      >Copyright © 2024. All Rights Reserved | Website Designer JJs IT</TypographyComponent>
    </BoxComponent>
  );
}
