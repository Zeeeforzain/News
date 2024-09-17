import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ur'; // Import the Urdu locale
import BoxComponent from './Box';
import TypographyComponent from './Typography';

const Date = (props) => {
  // Set moment to use Urdu locale
  moment.locale('ur');

  const [currentDate, setCurrentDate] = useState(moment().format('dddd, D MMMM YYYY'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(moment().format('dddd, D MMMM YYYY'));
    }, 1000 * 60 * 60 * 24); // Update every 24 hours

    return () => clearInterval(interval);
  }, []);

  return (
    <BoxComponent>
      <TypographyComponent
      color={props.color}
      fontSize={{xs:"14px", sm:'12px', md:'14px'}}
      fontWeight='600'
      >{currentDate}</TypographyComponent>
    </BoxComponent>
  );
};

export default Date;

