import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
    return (
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
                        color: '#FFFFF', // White color for text
                    }}
                >
                    Transforming Elements: The Power of Synthesis
                </Typography>
                <Box>
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
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
