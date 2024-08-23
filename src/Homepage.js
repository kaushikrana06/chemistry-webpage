import React, { useState, useMemo } from 'react';
import { Typography, Box, TextField, Button, Modal, Backdrop, Fade, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import ScienceIcon from '@mui/icons-material/Science';

const chemistryElements = [
    { id: 1, icon: <ScienceIcon fontSize="large" />, name: "H₂O" },
    { id: 2, icon: <ScienceIcon fontSize="large" />, name: "CO₂" },
    { id: 3, icon: <ScienceIcon fontSize="large" />, name: "NaCl" },
    { id: 4, icon: <ScienceIcon fontSize="large" />, name: "CH₄" },
];

const syntheses = {
    "Grignard Synthesis": "/grignard.jpg",
    "Diels-Alder Reaction": "/diels-alder.jpg",
    "Friedel-Crafts Alkylation": "/friedel-crafts.jpg",
};

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

    const memoizedChemistryElements = useMemo(() => 
        chemistryElements.map((element) => ({
            ...element,
            position: getRandomPosition(),
        })),
    []);

    const memoizedGifPositions = useMemo(() => 
        [
            { id: 1, gif: "/molecule1.gif" },
            { id: 2, gif: "/molecule2.gif" },
            { id: 3, gif: "/molecule3.gif" },
        ].map((item) => ({
            ...item,
            position: getRandomPosition(),
        })),
    []);

    const handleSearch = () => {
        const normalizedQuery = searchQuery.toLowerCase();
        const matchingSynthesis = Object.keys(syntheses).find(
            (synthesis) => synthesis.toLowerCase().includes(normalizedQuery)
        );

        if (matchingSynthesis) {
            setSelectedSynthesis(matchingSynthesis);
            setOpen(true);
        } else {
            setSnackbarMessage("Synthesis not found. Please try again.");
            setSnackbarOpen(true);
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
                        zIndex: 2,
                    }}
                >
                    Unlock the Blueprints of Molecular Creation
                </Typography>
            </motion.div>

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

            {memoizedChemistryElements.map((element) => (
                <motion.div
                    key={element.id}
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, repeatType: "reverse" }}
                    style={{
                        position: 'absolute',
                        top: element.position.top,
                        left: element.position.left,
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
            ))}

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
                            width: { xs: '90%', sm: '70%', md: '60%', lg: '50%' },
                            maxHeight: '80vh',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 2,  // Adjusted padding for all screen sizes
                            borderRadius: '8px',
                            textAlign: 'center',
                            overflow: 'auto',  // Enable scrolling if the content overflows
                            display: 'flex',  // Flexbox to center the image vertically
                            flexDirection: 'column',
                            alignItems: 'center',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'url("/backimg.jpg") no-repeat center center fixed',
                                backgroundSize: 'cover',
                                filter: 'blur(8px)',
                                zIndex: -1,
                            },
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                marginBottom: '10px',
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontWeight: 'bold',
                                color: '#333',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
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
                                maxWidth: '100%',
                                maxHeight: '100%',
                                borderRadius: '8px',
                                objectFit: 'contain',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                marginBottom: '20px',  // Margin to ensure spacing at the bottom
                            }}
                        />
                    </Box>
                </Fade>
            </Modal>

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

            {memoizedGifPositions.map((item) => (
                <Box
                    key={item.id}
                    sx={{
                        position: 'absolute',
                        top: item.position.top,
                        left: item.position.left,
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
            ))}
        </Box>
    );
};

export default HomePage;
