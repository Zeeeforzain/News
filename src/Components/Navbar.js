import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListComponent from "./List"; // Import your ListComponent
import BoxComponent from "./Box"; // Assuming BoxComponent is a wrapper component
import { useTheme, useMediaQuery } from "@mui/material";
import Title from "./Title";
import Date from "./Date";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if screen size is xs or sm
  const [drawerOpen, setDrawerOpen] = useState(false);

  const items = [
    { label: "خصوصی فیچر", path: "/Special" },
    { label: "زیرو پوائنٹ", path: "/ZeroPoint" },
    { label: "دلچسپ و عجیب", path: "/Interesting" },
    { label: "سائنس اور ٹیکنالوجی", path: "/Science" },
    { label: "صحت", path: "/Health" },
    { label: "بزنس", path: "/Business" },
    { label: "شوبز", path: "/Showbiz" },
    { label: "کھیل", path: "/Sports" },
    { label: "انٹرنیشنل", path: "/International" },
    { label: "پاکستان", path: "/Pakistan" },
    { label: "تازہ ترین", path: "/FreshNews" },
    { label: "صفحۂ اول", path: "/" },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <BoxComponent
      sx={{
        backgroundColor: "var(--primary)",
        color: "var(--light)",
        padding: { xs: "5px 10px", sm: '10px 20px', md: "10px 20px", lg: "2px 80px 2px 150px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {isMobile ? (
        <>
          <Date color='var(--light)' />
          <BoxComponent
            display='flex'
            flexDirection='row'
            gap='5px' 
          >
            <Title
              sx={{
                fontFamily:'var(--main)',
                fontSize:'25px',
                fontWeight:'600',
                color:'var(--light)'
              }}
            />
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "flex", sm: "none", md: "none" },
                flexDirection: 'row',
                gap:'5px'
              }}
            >
              <MenuIcon />
            </IconButton>
          </BoxComponent>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: "var(--primary)",
                color: "var(--light)",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                width: '125px',
              },
            }}
          >
            <Title 
              sx={{
                fontFamily:'var(--main)',
                fontSize:'25px',
                fontWeight:'700',
                color:'var(--light)'
              }}
            />
            <ListComponent
              items={items.map(item => (
                <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }} key={item.label}>
                  {item.label}
                </Link>
              ))}
              sx={{
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'flex-end', 
                gap: '5px', 
                width: '100%',
                padding: 0,
                marginTop:'20px',
                listStyle: 'none',
              }}
            />
          </Drawer>
        </>
      ) : (
        <BoxComponent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: '100%',
          }}
        >
          <ListComponent
            items={items.map(item => (
              <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }} key={item.label}>
                {item.label}
              </Link>
            ))}
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "var(--main)",
              fontSize: { xs: '12px', sm: '12px', md: '16px', lg: "20px" },
            }}
          />
        </BoxComponent>
      )}
    </BoxComponent>
  );
}
