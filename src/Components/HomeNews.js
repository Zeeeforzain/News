import React from "react";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";
import Headlines from "./Headlines";
import News from "./News";

export default function HomeNews(props) {
  return (
    <BoxComponent width="47%">
      <TypographyComponent
      fontSize='30px'
      fontWeight='700'
      fontFamily='var(--main)'
      color='var(--dull)'
      textAlign='right'
      >
        {props.title}
      </TypographyComponent>
      <Headlines
        title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"
      />
      <News
        title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"
      />
      <News
        title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"
      />
      <News
        title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"
      />
      <News
        title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"
      />
    </BoxComponent>
  );
}
