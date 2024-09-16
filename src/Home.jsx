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
      <BoxComponent
          width= "auto"
          display={{xs:'none', sm:'flex'}}
          justifyContent= "right"
          paddingRight={{ xs: "10px", sm: "10px", md: "10px", lg: "100px" }}
          >
        <Title
        sx={{
          fontFamily:'var(--main)',
          fontSize:{sm:'35px', md:'40px', lg:'50px'},
          fontWeight:'700',
          color:'var(--primary)'
        }}
        />
      </BoxComponent>
      <Navbar />
      <News
        title="
      پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"
      />
      <News
        title="
      پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"
      />
      <News
        title="
      پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"
      />
      <Headlines
        title="
       پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"
      />
      <Footer />
    </BoxComponent>
  );
}
