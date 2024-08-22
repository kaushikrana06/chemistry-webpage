import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Modal, Backdrop, Fade, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import ScienceIcon from '@mui/icons-material/Science';

// Sample chemistry elements for random animations
const chemistryElements = [
    { id: 1, icon: <ScienceIcon fontSize="large" />, name: "H₂O" },
    { id: 2, icon: <ScienceIcon fontSize="large" />, name: "CO₂" },
    { id: 3, icon: <ScienceIcon fontSize="large" />, name: "NaCl" },
    { id: 4, icon: <ScienceIcon fontSize="large" />, name: "CH₄" },
];

// Syntheses data with corresponding image paths
const syntheses = {
    "Grignard Synthesis": "/grignard.jpg",
    "Diels-Alder Reaction": "/diels-alder.jpg",
    "Friedel-Crafts Alkylation": "/friedel-crafts.jpg",
    // Add more synthesis names and image paths here
};

// Utility function to generate random position percentages
const getRandomPosition = () => ({
    top: `${Math.random() * 80}%`,
    left: `${Math.random() * 80}%`,
});

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSynthesis, setSelectedSynthesis] = useState(null);
    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    // Handle search and show Snackbar if no match is found
    const handleSearch = () => {
        const normalizedQuery = searchQuery.toLowerCase();
        const matchingSynthesis = Object.keys(syntheses).find(
            (synthesis) => synthesis.toLowerCase() === normalizedQuery
        );

        if (matchingSynthesis) {
            setSelectedSynthesis(matchingSynthesis);
            setOpen(true);
        } else {
            setSnackbarMessage("Synthesis not found. Please try again.");
            setSnackbarOpen(true); // Show the Snackbar
        }
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedSynthesis(null);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(to bottom right, #7BC6CC, #BE93C5)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Welcome Text */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Typography
                    variant="h2"
                    className="qwitcher-grypen-bold"
                    sx={{
                        color: '#FFFFFF',
                        marginBottom: '20px',
                        textAlign: 'center',
                        fontSize: '3rem',
                        textShadow: '2px 2px 4px #000000',
                        zIndex: 2, // Ensure the text is above other elements
                    }}
                >
                    Unlock the Blueprints of Molecular Creation
                </Typography>
            </motion.div>

            {/* Search Bar and Button */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '600px',
                    marginBottom: '20px',
                }}
            >
                <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Enter synthesis name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                        backgroundColor: '#fff',
                        borderRadius: '4px',
                    }}
                />
                <Button
                    variant="contained"
                    onClick={handleSearch}
                    sx={{
                        marginLeft: '10px',
                        backgroundColor: '#FF8E53',
                        '&:hover': {
                            backgroundColor: '#FF7643',
                        },
                    }}
                >
                    Search
                </Button>
            </Box>

            {/* Animated Chemistry Icons with Random Positions */}
            {chemistryElements.map((element) => {
                const randomPosition = getRandomPosition();
                return (
                    <motion.div
                        key={element.id}
                        initial={{ opacity: 0, y: -200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, repeatType: "reverse" }}
                        style={{
                            position: 'absolute',
                            top: randomPosition.top,
                            left: randomPosition.left,
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                        }}
                        whileHover={{ scale: 1.2 }}
                    >
                        {element.icon}
                        <Typography variant="caption" sx={{ color: '#FFF' }}>
                            {element.name}
                        </Typography>
                    </motion.div>
                );
            })}

            {/* Modal to Display Synthesis Image */}
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '60%',
                            height: '60%',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            borderRadius: '8px',
                            textAlign: 'center',
                            overflow: 'hidden', // Ensures the pseudo-element stays within the box boundaries
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'url("/backimg.jpg") no-repeat center center fixed',
                                backgroundSize: 'cover',
                                filter: 'blur(8px)', // Apply blur effect
                                zIndex: -1, // Ensure it stays behind the content
                            },
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                marginBottom: '10px',
                                fontFamily: "'Bebas Neue', sans-serif",  // Apply Bebas Neue font
                                fontWeight: 'bold',  // Make the text bold
                                color: '#333',  // Darker text color for contrast
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',  // Add a subtle drop shadow
                                letterSpacing: '0.3em',
                            }}
                        >
                            {selectedSynthesis}
                        </Typography>

                        <Box
                            component="img"
                            src={syntheses[selectedSynthesis]}
                            alt={selectedSynthesis}
                            sx={{
                                width: 'auto',
                                height: 'auto',
                                borderRadius: '15px',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </Box>
                </Fade>
            </Modal>

            {/* Snackbar for No Match Found */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleSnackbarClose} severity="warning" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>

            {/* First Animated Molecular GIF */}
            {[
                { id: 1, gif: "/molecule1.gif" },
                { id: 2, gif: "/molecule2.gif" },
                { id: 3, gif: "/molecule3.gif" },
            ].map((item) => {
                const randomPosition = getRandomPosition();
                return (
                    <Box
                        key={item.id}
                        sx={{
                            position: 'absolute',
                            top: randomPosition.top,
                            left: randomPosition.left,
                            width: '150px',
                            height: '150px',
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, rotate: 360 }}
                            transition={{ duration: 5, repeat: Infinity }}
                            style={{
                                width: '100%',
                                height: '100%',
                                background: `url(${item.gif}) no-repeat center`,
                                backgroundSize: 'contain',
                                mixBlendMode: 'multiply',
                            }}
                        />
                    </Box>
                );
            })}
        </Box>
    );
};

export default HomePage;
