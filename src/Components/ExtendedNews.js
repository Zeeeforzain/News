import React from "react";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";
import Date from "./Date";
import ButtonComponent from "./Button";


export default function ExtendedNews() {
  return (
    <BoxComponent
    width="55%"
    display='flex'
    flexDirection='column'
    alignItems="flex-end"
    >
      <TypographyComponent
      fontSize="30px"
      fontWeight="500"
      fontFamily="var(--main)"
      marginBottom='10px'
      textAlign="center"
      width='100%'
      >
        خوشی، محبت اور کامیابی کی تلاش میں زندگی کا سفر{" "}
      </TypographyComponent>
      <Date/>
      <img 
      style={{
        width:'100%',
        height:'50vh',
        marginTop:'10px'
    }}
      src="Images/ik.png" alt="" />
      <BoxComponent
      width='100%'
      display='flex'
      justifyContent='space-between'
      marginTop='10px'
      >
        <ButtonComponent
        variant='contained'
        sx={{
            width:'33%',
            background:'var(--success)',
            fontWeight:'700',
            borderRadius:'2px',
            fontSize:'15px',
        }}
        >
             <img 
            style={{
                width:'20px',
                height:'20px',
                marginRight:'10px'
            }}
            src="Images/whatsapp.png" alt="" /> 
            واٹس ایپ
        </ButtonComponent>
        <ButtonComponent
           variant='contained'
           sx={{
               width:'33%',
               background:'var(--info)',
               fontWeight:'700',
               borderRadius:'2px'
            }}
            ><img 
            style={{
                width:'20px',
                height:'15px',
                marginRight:'10px'
            }}
            src="Images/twter.png" alt="" />
                ٹویٹر
            
            </ButtonComponent>
        <ButtonComponent
         variant='contained'
         sx={{
             width:'33%',
             background:'var(--facebook)',
             borderRadius:'2px',
             fontWeight:'700',
        }}
        >
           <img 
            style={{
                width:'20px',
                height:'20px',
                marginRight:'10px'
            }}
            src="Images/face.png" alt="" /> 
            فیس بک</ButtonComponent>
      </BoxComponent>
      <BoxComponent
      width='100%'
      height='16vh'
      marginTop='10px'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-evenly'
      backgroundColor='var(--success)'
      sx={{
        "&:hover":{
            cursor:'pointer'
        }
      }}
      >
        <img 
        style={{
            width:'40px',
            height:'40px'
        }}
        src="Images/whatsapp.png" alt="" />
        <TypographyComponent
        color='var(--light)'
        fontWeight="500"
        fontSize='20px'
        fontFamily='var(--main)'
        >
        ہمارا واٹس ایپ چینل جوائن کریں</TypographyComponent>
      </BoxComponent>
      <TypographyComponent
      textAlign='right'
      fontSize="25px"
      fontFamily="var(--main)"
      >
        زندگی ایک مسلسل سفر ہے جس میں ہم خوشی، محبت اور کامیابی کی تلاش میں
        مختلف مراحل سے گزرتے ہیں۔ ہر قدم ہمیں نئی منزلوں کی طرف لے جاتا ہے جہاں
        ہمارے تجربات، مشکلات اور کامیابیاں ہمیں بہتر انسان بننے میں مدد دیتی
        ہیں۔
      </TypographyComponent>
    </BoxComponent>
  );
}
