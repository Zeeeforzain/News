import React from "react";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";
import Headlines from "./Headlines";
import News from "./News";

// Array for headlines
const headlinesData = [
  {
    title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    img: "Images/ik.png",
    detail: `
      محبت ایک ایسی خوبصورت اور طاقتور جذبہ ہے جو انسان کی زندگی میں روشنی اور خوشی بھر دیتی ہے۔
      یہ ایک ایسی طاقت ہے جو ہمیں ایک دوسرے کے قریب لاتی ہے، ہمارے دلوں کو جوڑتی ہے اور ہمیں ایک دوسرے کی قدر کرنا سکھاتی ہے۔
    `,
  },
];

// Array for news articles
const newsData = [
  {
    title: "ارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے",
    img: "Images/ik.png",
    detail: "یہ ایک تفصیلی خبر ہے...",
  },
  {
    title: "خارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے2",
    img: "Images/ik.png",
    detail: "یہ ایک اور تفصیلی خبر ہے...",
  },
  {
    title:" ارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گےے",
    img: "Images/ik.png",
    detail: "یہ ایک تفصیلی خبر ہے...",
  },
  {
    title: "ارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گےر 2",
    img: "Images/ik.png",
    detail: "یہ ایک اور تفصیلی خبر ہے...",
  },
];

export default function HomeNews(props) {
  return (
    <BoxComponent
      width={{ xs: '100%', md: "47%" }}
      display='flex'
      flexDirection='column'
      justifyContent="space-around"
      alignItems='flex-end'
    >
      <TypographyComponent
        fontSize="30px"
        fontWeight="700"
        fontFamily="var(--main)"
        color="var(--dull)"
      >
        {props.title}
      </TypographyComponent>
      {/* Using headlinesData for Headlines component */}
      {headlinesData.map((headline, index) => (
        <Headlines
          key={index}
          width='95%'
          title={headline.title}
          img={headline.img}
          detail={headline.detail}
        />
      ))}
      {/* Using newsData for News components */}
      {newsData.map((newsItem, index) => (
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
