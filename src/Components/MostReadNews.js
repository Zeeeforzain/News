import React from "react";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";
import News from "./News";

// Array for most-read news data
const mostReadNewsData = [
  {
    title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    img: "Images/ik.png",
    detail: 'پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان',
  },
  {
    title: "نئی اقتصادی پالیسی کے اثرات",
    img: "Images/ik.png",
    detail: 'حکومت نے نئی اقتصادی پالیسی کا اعلان کیا ہے جس کے اثرات...',
  },
  {
    title: "تعلیم کے شعبے میں اصلاحات",
    img: "Images/ik.png",
    detail: 'تعلیم کے شعبے میں اصلاحات کے حوالے سے نئے اقدامات...',
  },
  {
    title: "تعلیم کے شعبے میں اصلاحات",
    img: "Images/ik.png",
    detail: 'تعلیم کے شعبے میں اصلاحات کے حوالے سے نئے اقدامات...',
  },
  {
    title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    img: "Images/ik.png",
    detail: 'پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان',
  },
  {
    title: "نئی اقتصادی پالیسی کے اثرات",
    img: "Images/ik.png",
    detail: 'حکومت نے نئی اقتصادی پالیسی کا اعلان کیا ہے جس کے اثرات...',
  },
  {
    title: "تعلیم کے شعبے میں اصلاحات",
    img: "Images/ik.png",
    detail: 'تعلیم کے شعبے میں اصلاحات کے حوالے سے نئے اقدامات...',
  },
  {
    title: "تعلیم کے شعبے میں اصلاحات",
    img: "Images/ik.png",
    detail: 'تعلیم کے شعبے میں اصلاحات کے حوالے سے نئے اقدامات...',
  },
  {
    title: "تعلیم کے شعبے میں اصلاحات",
    img: "Images/ik.png",
    detail: 'تعلیم کے شعبے میں اصلاحات کے حوالے سے نئے اقدامات...',
  },
  {
    title: "تعلیم کے شعبے میں اصلاحات",
    img: "Images/ik.png",
    detail: 'تعلیم کے شعبے میں اصلاحات کے حوالے سے نئے اقدامات...',
  },
];

export default function MostReadNews(props) {
  return (
    <BoxComponent marginTop="10px" width={props.width}>
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
      {mostReadNewsData.map((newsItem, index) => (
        <News 
          key={index}
          title={newsItem.title}
          img={newsItem.img}
          detail={newsItem.detail}
        />
      ))}
    </BoxComponent>
  );
}
