import React from 'react';
import BoxComponent from './Box';
import Headlines from './Headlines';
import Column from './Column';
import TypographyComponent from './Typography';

// Array for headlines
const headlinesData = [
  {
    title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    img: "Images/ik.png",
    detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
  },
];

// Array for columns
const columnsData = [
  {
    title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    img: "Images/ik.png",
    detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
  },
  {
    title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    img: "Images/ik.png",
    detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
  },
  {
    title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    img: "Images/ik.png",
    detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
  },
  {
    title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    img: "Images/ik.png",
    detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
  },
  {
    title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    img: "Images/ik.png",
    detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
  },
  {
    title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    img: "Images/ik.png",
    detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
  },
  {
    title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    img: "Images/ik.png",
    detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
  },
  {
    title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    img: "Images/ik.png",
    detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
  },
  {
    title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    img: "Images/ik.png",
    detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
  },
  {
    title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    img: "Images/ik.png",
    detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
  },
  
];

export default function ColumnBox(props) {
  return (
    <BoxComponent width='100%'>
      <TypographyComponent
        textAlign='right'
        fontSize='26px'
        fontWeight='700'
        marginTop='30px'
        borderTop='1px solid var(--secondary)'
      >
        کالم
      </TypographyComponent>

      {/* Using the headlinesData for Headlines component */}
      {headlinesData.map((headline, index) => (
        <Headlines
          key={index}
          title={headline.title}
          img={headline.img}
          detail={headline.detail}
        />
      ))}

      {/* Rendering Column components in pairs */}
      {[...Array(Math.ceil(columnsData.length / 2))].map((_, rowIndex) => (
        <BoxComponent
          key={rowIndex}
          display='flex'
          justifyContent='space-between'
          width='100%'
          marginBottom='30px'
        >
          {columnsData.slice(rowIndex * 2, rowIndex * 2 + 2).map((columnItem, columnIndex) => (
            <Column
              key={columnIndex}
              title={columnItem.title}
              img={columnItem.img}
              detail={columnItem.detail}
            />
          ))}
        </BoxComponent>
      ))}
    </BoxComponent>
  );
}
