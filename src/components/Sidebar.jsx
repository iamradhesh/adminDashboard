import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';

const drawerWidth = 180;

export default function Sidebar() {
  const theme = useTheme(); // Access the theme

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 1,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            mt: "5%"
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          sx={{ width: drawerWidth, height: '100%' }}
          role="presentation"
        >
          <List>
            {['Dashboard'].map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  sx={{
                    background: "#F3F5FC",
                    borderRight: "1px solid blue", // Ensure this style is not overridden
                    '&:hover': {
                      background: "#E0E4E9", // Optional: add hover effect
                    },
                  }}
                  component={Link}
                  to={text === 'Dashboard' ? '/' : '#'}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <HomeIcon sx={{ color: "#4C70CE" }} /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
}
