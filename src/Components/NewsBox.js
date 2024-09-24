import React from "react";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";
import DetailNews from "./DetailNews";

export default function NewsBox(props) {
  // Array of news items
  const newsItems = [
    {
      title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
      img: "Images/ik.png",
      detail: `
        محبت ایک ایسی خوبصورت اور طاقتور جذبہ ہے جو انسان کی زندگی میں روشنی اور خوشی بھر دیتی ہے۔ یہ ایک ایسی طاقت ہے جو ہمیں ایک دوسرے کے قریب لاتی ہے، ہمارے دلوں کو جوڑتی ہے اور ہمیں ایک دوسرے کی قدر کرنا سکھاتی ہے۔ محبت کا مفہوم صرف رومانوی تعلقات تک محدود نہیں ہے، بلکہ یہ دوستی، خاندان، اور انسانیت کے درمیان بھی پایا جاتا ہے۔
        ... (truncated for brevity)
      `,
    },
    {
      title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
      img: "Images/ik.png",
      detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    },
    {
      title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
      img: "Images/ik.png",
      detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    },
   
    {
      title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
      img: "Images/ik.png",
      detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    },
   
    {
      title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
      img: "Images/ik.png",
      detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    },
   
    {
      title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
      img: "Images/ik.png",
      detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    },
   
    {
      title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
      img: "Images/ik.png",
      detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    },
   
    {
      title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
      img: "Images/ik.png",
      detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    },
   
    {
      title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
      img: "Images/ik.png",
      detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    },
   
    {
      title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
      img: "Images/ik.png",
      detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    },
   
    {
      title: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
      img: "Images/ik.png",
      detail: "پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان",
    },
   
  ];

  return (
    <BoxComponent>
      <TypographyComponent
        textAlign="right"
        fontSize={{ xs: "30px", md: "40px", xl: "50px" }}
        fontWeight="700"
        marginTop="20px"
        marginBottom="20px"
        color="var(--primary)"
        borderBottom="1px solid var(--secondary)"
      >
        {props.title}
      </TypographyComponent>

      {/* Map through the newsItems array to render DetailNews components */}
      {newsItems.map((news, index) => (
        <DetailNews
          key={index} // key is important for React list rendering
          title={news.title}
          img={news.img}
          detail={news.detail}
        />
      ))}
    </BoxComponent>
  );
}
