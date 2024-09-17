import React from "react";
import BoxComponent from "./Components/Box";
import Head from "./Components/Head";
import Title from "./Components/Title";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Headlines from "./Components/Headlines";
import Column from "./Components/Column";
import ColumnBox from "./Components/ColumnBox";
import DetailNews from "./Components/DetailNews";
import NewsBox from "./Components/NewsBox";
import Pakistan from "./Components/Pakistan";

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
     <Pakistan/>
      <Footer />
    </BoxComponent>
  );
}
