import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const AboutPage = () => {
    return (
        <Box
            sx={{
                height: 'calc(100vh - 80px)', // Adjust height to account for footer
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'url("/chemistry-background.jpg") no-repeat center center fixed', // Background image
                backgroundSize: 'cover', // Cover the entire page
                paddingTop: '60px', // Adjust padding for Navbar
                padding: '20px',
            }}
        >
            <Container
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Semi-transparent background for text
                    padding: '40px',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h3" sx={{ marginBottom: '20px', color: '#333', fontFamily: 'Roboto, sans-serif' }}>
                    About Us
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        marginBottom: '20px',
                        color: '#555',
                        lineHeight: '1.6',
                        fontFamily: 'Roboto, sans-serif',
                    }}
                >
                    Welcome to Chemistry World, where we explore the wonders of chemistry. Our mission is to educate, inspire, and engage
                    people of all ages with the beauty of chemical reactions, molecular structures, and more. Join us as we dive into the
                    fascinating world of chemistry!
                </Typography>
                <Box
                    component="img"
                    src="/chemistry-lab.jpg" // Replace with your image path
                    alt="Chemistry Lab"
                    sx={{
                        width: '100%',
                        maxWidth: '500px',
                        height: 'auto',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    }}
                />
            </Container>
        </Box>
    );
};

export default AboutPage;
