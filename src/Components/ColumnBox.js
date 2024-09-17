import React from 'react';
import BoxComponent from './Box';
import Headlines from './Headlines';
import Column from './Column';
import TypographyComponent from './Typography';

export default function ColumnBox(props) {
  return (
    <BoxComponent
    width='25%'
    >
        <TypographyComponent
        textAlign='right'
        fontSize='26px'
        fontWeight='700'
        marginTop='30px'
        borderTop='1px solid var(--secondary)'
        >{props.title}</TypographyComponent>
       <Headlines
        title="
       پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"
      />
      <BoxComponent
      display='flex'
      justifyContent='space-between'
      width='100%'
      marginBottom='30px'
      >
        <Column title="
       پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
       img="Images/ik.png" />
        <Column title="
       پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
       img="Images/ik.png" />
      </BoxComponent>
      <BoxComponent
      display='flex'
      justifyContent='space-between'
      width='100%'
      marginBottom='30px'
      >
        <Column title="
       پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
       img="Images/ik.png" />
        <Column title="
       پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
       img="Images/ik.png" />
      </BoxComponent>
      <BoxComponent
      display='flex'
      justifyContent='space-between'
      width='100%'
      marginBottom='30px'
      >
        <Column title="
       پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
       img="Images/ik.png" />
        <Column title="
       پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
       img="Images/ik.png" />
      </BoxComponent>
      <BoxComponent
      display='flex'
      justifyContent='space-between'
      width='100%'
      marginBottom='30px'
      >
        <Column title="
       پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
       img="Images/ik.png" />
        <Column title="
       پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
       img="Images/ik.png" />
      </BoxComponent>
      <BoxComponent
      display='flex'
      justifyContent='space-between'
      width='100%'
      marginBottom='30px'
      >
        <Column title="
       پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
       img="Images/ik.png" />
        <Column title="
       پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
       img="Images/ik.png" />
      </BoxComponent>
    </BoxComponent>
  );
}

