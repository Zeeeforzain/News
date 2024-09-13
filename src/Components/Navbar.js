import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is xs or sm
  const [drawerOpen, setDrawerOpen] = useState(false);

  const items = [
    { label: "خصوصی فیچر" },
    { label: "زیرو پوائنٹ" },
    { label: "دلچسپ و عجیب" },
    { label: "سائنس اور ٹیکنالوجی" },
    { label: "صحت" },
    { label: "بزنس" },
    { label: "شوبز" },
    { label: "کھیل" },
    { label: "انٹرنیشنل" },
    { label: "پاکستان" },
    { label: "تازہ ترین" },
    { label: "صفحۂ اول" },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'var(--primary)',
        color: 'var(--light)',
        padding: isMobile ? '10px' : '2px 80px 2px 150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isMobile ? 'flex-end' : 'space-between'
      }}
    >
      {isMobile && (
        <>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{
              '& .MuiDrawer-paper': {
                backgroundColor: 'var(--primary)',
                color: 'var(--light)'
              }
            }}
          >
            <List>
              {items.map((item) => (
                <ListItem button key={item.label} sx={{ color: 'var(--light)' }}>
                  {item.label}
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      )}

      {!isMobile && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <List sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            {items.map((item) => (
              <ListItem key={item.label} sx={{ color: 'var(--light)', display: 'inline-block' }}>
                {item.label}
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
}
