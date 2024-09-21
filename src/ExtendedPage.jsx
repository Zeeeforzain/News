import React from "react";
import BoxComponent from "./Components/Box";
import ColumnBox from "./Components/ColumnBox";
import ExtendedNews from "./Components/ExtendedNews";
import MostReadNews from "./Components/MostReadNews";
import { useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Title from "./Components/Title";
import Head from "./Components/Head";

export default function ExtendedPage() {
  const location = useLocation();
  const { title, img, detail } = location.state || {};

  return (
    <>
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
      <BoxComponent>
        <BoxComponent
          display="flex"
          flexDirection={{ xs: "column-reverse", md: "row" }}
          justifyContent="space-around" // Ensuring alignment starts from the left
          alignItems="flex-start" // Align vertically to the start for medium screens and above
        >
          <BoxComponent width={{ xs: "95%", md: "30%" }} margin={{ xs: "auto", md: "0" }}>
            <ColumnBox />
          </BoxComponent>
          <BoxComponent width={{ xs: "95%", md: "60%" }} margin={{ xs: "auto", md: "0" }}>
            <ExtendedNews title={title} img={img} detail={detail} />
          </BoxComponent>
        </BoxComponent>
        <BoxComponent
          display="flex"
          justifyContent={{ xs: "center", md: "right" }}
          padding={{ xs: "0px", md: "50px" }}
        >
          <MostReadNews width={{ xs: "95%", md: "30%" }} />
        </BoxComponent>
      </BoxComponent>
    </>
  );
}

