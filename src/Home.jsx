import React from "react";
import BoxComponent from "./Components/Box";
import Head from "./Components/Head";
import Title from "./Components/Title";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Headlines from "./Components/Headlines";

export default function Home() {
  return (
    <BoxComponent>
      <Head />
      <BoxComponent width="93%" display="flex" justifyContent="right">
        <Title />
      </BoxComponent>
      <Navbar />
      <News
        title="
      پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان" img="Images/ik.png"
      />
      <News
        title="
      پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان" img="Images/ik.png"
      />
      <News
        title="
      پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان" img="Images/ik.png"
      />
      <Headlines
       title="
       پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان" img="Images/ik.png"
       
      />
      <Footer />
    </BoxComponent>
  );
}
