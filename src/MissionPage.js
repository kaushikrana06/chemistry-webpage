import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const MissionPage = () => {
    return (
        <Box
            sx={{
                height: 'calc(100vh - 80px)', // Adjust height to account for footer
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'url("/mission-background.jpg") no-repeat center center fixed', // Background image
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
                    Our Mission
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
                    At Chemistry World, our mission is to bring the wonders of chemistry to life. We strive to make chemistry accessible and
                    engaging for everyone, whether you're a student, educator, or just someone with a passion for science. Through hands-on
                    experiments, interactive content, and a vibrant community, we aim to spark curiosity and foster a deeper understanding of
                    the chemical world.
                </Typography>
                <Box
                    component="img"
                    src="/mission-image.jpg" // Replace with your image path
                    alt="Chemistry Mission"
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

export default MissionPage;