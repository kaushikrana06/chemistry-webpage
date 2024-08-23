import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{
                width: 250,
                backgroundColor: '#333', // Set the background color of the drawer
                height: '100%', // Make the drawer take the full height
                color: '#FFFFFF', // Set text color to white
                padding: '20px 10px', // Add some padding for better spacing
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button component={Link} to="/" sx={{ marginBottom: '10px' }}>
                    <ListItemText primary="Home" sx={{ textAlign: 'start' }} />
                </ListItem>
                <ListItem button component={Link} to="/about" sx={{ marginBottom: '10px' }}>
                    <ListItemText primary="About Us" sx={{ textAlign: 'start' }} />
                </ListItem>
                <ListItem button component={Link} to="/mission">
                    <ListItemText primary="Our Mission" sx={{ textAlign: 'start' }} />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Translucent background
                    backdropFilter: 'blur(10px)', // Blur effect for better translucency
                    boxShadow: 'none', // Remove default shadow for a sleeker look
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h5"
                        sx={{
                            flexGrow: 1,
                            fontFamily: "'Qwitcher Grypen', cursive", // Apply custom font
                            fontWeight: 'bold',
                            color: '#FFFFFF', // White color for text
                        }}
                    >
                        Transforming Elements: The Power of Synthesis
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/"
                            sx={{
                                fontFamily: "'Roboto', sans-serif",
                                fontWeight: '500',
                                letterSpacing: '0.05em',
                                color: '#FFFFFF',
                                '&:hover': {
                                    color: '#FF8E53', // Hover effect color
                                },
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/about"
                            sx={{
                                fontFamily: "'Roboto', sans-serif",
                                fontWeight: '500',
                                letterSpacing: '0.05em',
                                color: '#FFFFFF',
                                '&:hover': {
                                    color: '#FF8E53', // Hover effect color
                                },
                            }}
                        >
                            About Us
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/mission"
                            sx={{
                                fontFamily: "'Roboto', sans-serif",
                                fontWeight: '500',
                                letterSpacing: '0.05em',
                                color: '#FFFFFF',
                                '&:hover': {
                                    color: '#FF8E53', // Hover effect color
                                },
                            }}
                        >
                            Our Mission
                        </Button>
                    </Box>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {drawerContent}
            </Drawer>
        </>
    );
};

export default Navbar;
