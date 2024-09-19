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
      display='flex'
      justifyContent='space-evenly'
      ><BoxComponent display="flex" flexDirection="column" width="30%">
        <BoxComponent
        height="105vh"
        overflow='hidden'
        marginBottom='600px'
        >
        <ColumnBox/>
        </BoxComponent>
        <MostReadNews/>
        </BoxComponent>
        <BoxComponent width="60%" marginTop="10px">
          <BoxComponent display="flex" justifyContent="space-around">
            <BoxComponent display="flex" flexDirection="column" width="48%">
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
            <Headlines
              width="48%"
              title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
              img="Images/ik.png"
            />
          </BoxComponent>
          <BoxComponent
            display="flex"
            justifyContent="space-around"
            marginBottom="10px"
          >
            <HomeNews title="انٹرنیشنل" />
            <HomeNews title="پاکستان" />
          </BoxComponent>
          <BoxComponent
            display="flex"
            justifyContent="space-around"
            marginBottom="10px"
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
