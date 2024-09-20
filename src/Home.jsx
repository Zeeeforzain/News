import React from "react";
import BoxComponent from "./Components/Box";
import Head from "./Components/Head";
import Title from "./Components/Title";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Headlines from "./Components/Headlines";
import ColumnBox from "./Components/ColumnBox";
import MostReadNews from "./Components/MostReadNews";
import HomeNews from "./Components/HomeNews";

export default function Home() {
  return (
    <BoxComponent>
      <Head />
      <BoxComponent
        width="auto"
        display={{ xs: "none", sm: "flex" }}
        justifyContent="right"
        paddingRight={{ xs: "10px", sm: "10px", md: "10px", lg: "100px" }}
      >
        <Title
          sx={{
            fontFamily: "var(--main)",
            fontSize: { sm: "35px", md: "40px", lg: "50px" },
            fontWeight: "700",
            color: "var(--primary)",
          }}
        />
      </BoxComponent>
      <Navbar />
      <BoxComponent
        display="flex"
        justifyContent={{ xs: "center", md: "space-evenly" }}
        flexDirection={{ xs: "column-reverse", md: "row" }}
      >
        <BoxComponent
          display={{xs:'none', md:"flex"}}
          flexDirection="column"
          width={{ xs: "80%", md: "30%" }}
        >
          <BoxComponent
            height="105vh"
            display={{ xs: "none", md: "flex" }}
            overflow="hidden"
            marginBottom="600px"
          >
            <ColumnBox />
          </BoxComponent>
          <MostReadNews width="95%" />
        </BoxComponent>
        <BoxComponent width={{ xs: "100%", md: "60%" }} marginTop="10px">
          <BoxComponent
            display="flex"
            flexDirection={{ xs: "column-reverse", md: "row" }}
            justifyContent="space-around"
            alignItems={{xs:'flex-end', md:'start'}}
            marginRight='10px'
          >
            <BoxComponent
              display="flex"
              flexDirection="column"
              justifyContent='right'
              width={{ xs: "95%", md: "48%" }}
            >
              <News
                title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
                img="Images/ik.png"
                detail=" پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
              />
              <News
                title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
                img="Images/ik.png"
                detail=" پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
              />
              <News
                title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
                img="Images/ik.png"
                detail=" پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
              />
            </BoxComponent>
            <Headlines
              width={{ xs: "95%", md: "48%" }}
              title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
              img="Images/ik.png"
              detail=" پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
            />
          </BoxComponent>
          <BoxComponent
            display="flex"
            flexDirection={{xs:'column-reverse', md:'row'}}
            justifyContent="space-around"
            marginBottom="10px"
            padding='20px'
            >
            <HomeNews title="انٹرنیشنل" />
            <HomeNews title="پاکستان" />
          </BoxComponent>
          <BoxComponent
            display="flex"
            flexDirection={{xs:'column-reverse', md:'row'}}
            justifyContent="space-around"
            marginBottom="10px"
            padding='20px'
          >
            <HomeNews title="انٹرٹینمنٹ" />
            <HomeNews title="کھیل" />
          </BoxComponent>
        </BoxComponent>
      </BoxComponent>
      <Footer />
    </BoxComponent>
  );
}
