import React from 'react';
import BoxComponent from './Components/Box';
import Head from './Components/Head';
import Title from './Components/Title';
import Footer from './Components/Footer';

export default function Home() {
  return (
    <BoxComponent>
        <Head/>
        <BoxComponent
        width='93%'
        display='flex'
        justifyContent='right'
        >
        <Title/>
        </BoxComponent>
        <Footer/>
    </BoxComponent>
  );
}
