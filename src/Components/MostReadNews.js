import React from "react";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";
import News from "./News";

export default function MostReadNews() {
  return (
    <BoxComponent  marginTop="10px">
      <TypographyComponent
        fontSize="18px"
        fontWeight="700"
        textAlign="right"
        padding="5px"
        color="var(--light)"
        backgroundColor="var(--primary)"
      >
        آج کی سب سے زیادہ پڑھی جانے والی خبریں
      </TypographyComponent>
      <News 
      title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"/>
      <News 
      title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"/>
      <News 
      title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"/>
      <News 
      title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"/>
      <News 
      title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"/>
      <News 
      title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"/>
      <News 
      title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"/>
      <News 
      title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"/>
      <News 
      title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"/>
      <News 
      title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"/>
    </BoxComponent>
  );
}
