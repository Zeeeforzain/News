import React, { useState } from "react";
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
    "خصوصی فیچر",
    "زیرو پوائنٹ",
    "دلچسپ و عجیب",
    "سائنس اور ٹیکنالوجی",
    "صحت",
    "بزنس",
    "شوبز",
    "کھیل",
    "انٹرنیشنل",
    "پاکستان",
    "تازہ ترین",
    "صفحۂ اول",
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <BoxComponent
      sx={{
        backgroundColor: "var(--primary)",
        color: "var(--light)",
        padding: { xs: "10px", sm:'10px 20px', md: "10px 20px", lg: "2px 80px 2px 150px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {isMobile ? (
        <>
         
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Title/>
          <Date/>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{
              "& .MuiDrawer-paper": {
                backgroundColor: "var(--primary)",
                color: "var(--light)",
              },
            }}
          >
            {/* Use ListComponent for Drawer items */}
            <ListComponent items={items} />
          </Drawer>
        </>
      ) : (
        <BoxComponent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
         
          }}
        >
          {/* Use ListComponent for non-mobile view */}
          <ListComponent
            items={items}
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "var(--main)",
              fontSize: {xs:'12px',sm:'12px', md:'16px', lg:"20px"},
            }}
          />
        </BoxComponent>
      )}
    </BoxComponent>
  );
}
