import React from 'react';
import BoxComponent from './Components/Box';
import Head from './Components/Head';
import Title from './Components/Title';
import Navbar from './Components/Navbar';
import CommonComponent from './Components/CommonComponent';
import Footer from './Components/Footer';
export default function Special() {
  return (
    <BoxComponent>
      <Head/>
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
      <CommonComponent
      title="خصوصی فیچر"
      />
      <Footer/>
    </BoxComponent>
  );
}
