import React, { useState, useMemo } from 'react';
import { Typography, Box, TextField, Button, Modal, Backdrop, Fade, Snackbar, Alert, Autocomplete } from '@mui/material';
import { motion } from 'framer-motion';
import ScienceIcon from '@mui/icons-material/Science';

const categories = {
    "Endogenous Catecholamines": [
        { name: "Norepinephrine", image: "/norepinephrine.jpg" },
        { name: "Epinephrine", image: "/epinephrin.jpg" },
        { name: "Dopamine", image: "/dopamine.jpg" },
    ],
    "Drugs Affecting Norepinephrine Release": [
    { "name": "Amphetamine", "image": "/amphetamine.jpg" },
    { "name": "Benzphetamine", "image": "/benzphetamine.jpg" },
    { "name": "Hydroxyamphetamine", "image": "/hydroxyamphetamine.jpg" },
    { "name": "Methamphetamine", "image": "/methamphetamine.jpg" },
    { "name": "Phentermine", "image": "/phentermine.jpg" },
    { "name": "Chlorphentermine", "image": "/chlorphentermine.jpg" },
    { "name": "Mephentermine", "image": "/mephentermine.jpg" }
],

    // "Organic Chemistry": [
    //     { name: "Grignard Synthesis", image: "/grignard.jpg" },
    //     { name: "Diels-Alder Reaction", image: "/diels-alder.jpg" },
    // ],
    // "Inorganic Chemistry": [
    //     { name: "Friedel-Crafts Alkylation", image: "/friedel-crafts.jpg" },
    // ],
    // // Add more categories and reactions as needed
};

const chemistryElements = [
    { id: 1, icon: <ScienceIcon fontSize="large" />, name: "H₂O" },
    { id: 2, icon: <ScienceIcon fontSize="large" />, name: "CO₂" },
    { id: 3, icon: <ScienceIcon fontSize="large" />, name: "NaCl" },
    { id: 4, icon: <ScienceIcon fontSize="large" />, name: "CH₄" },
];

const gifElements = [
    { id: 1, gif: "/molecule1.gif" },
    { id: 2, gif: "/molecule2.gif" },
    { id: 3, gif: "/molecule3.gif" },
];

const getRandomPosition = () => ({
    top: `${Math.random() * 80}%`,
    left: `${Math.random() * 80}%`,
});

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedReaction, setSelectedReaction] = useState(null);
    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    // Memoize positions so they don't change on every render
    const memoizedChemistryElements = useMemo(() => chemistryElements.map((element) => ({
        ...element,
        position: getRandomPosition(),
    })), []);

    const memoizedGifElements = useMemo(() => gifElements.map((item) => ({
        ...item,
        position: getRandomPosition(),
    })), []);

    const handleCategoryChange = (event, value) => {
        setSelectedCategory(value);
        setSelectedReaction(null); // Reset the reaction dropdown when a new category is selected
    };

    const handleReactionChange = (event, value) => {
        setSelectedReaction(value);
    };

    const handleSearch = () => {
        if (selectedReaction) {
            setOpen(true);
        } else {
            setSnackbarMessage("Please select a reaction.");
            setSnackbarOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
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
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '400px',
                    marginBottom: '20px',
                    gap: 2,
                }}
            >
                <Autocomplete
                    options={Object.keys(categories)}
                    getOptionLabel={(option) => option}
                    onChange={handleCategoryChange}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Choose Category"
                            variant="outlined"
                            placeholder="Select a category..."
                            sx={{
                                backgroundColor: '#fff',
                                borderRadius: '4px',
                                '& .MuiInputLabel-root': {
                                    color: '#000',  // Dark label color
                                    fontWeight: 'bold',  // Bold label text
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#333',  // Even darker color when focused
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#333',  // Darker border when active
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#333',  // Darker border on hover
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#333',  // Darker border when focused
                                    },
                                },
                            }}
                        />
                    )}
                    sx={{ width: '100%' }}
                />

                {selectedCategory && (
                    <Autocomplete
                        options={categories[selectedCategory]}
                        getOptionLabel={(option) => option.name}
                        onChange={handleReactionChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Choose Reaction"
                                variant="outlined"
                                placeholder="Select a reaction..."
                                sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: '4px',
                                    '& .MuiInputLabel-root': {
                                        color: '#000',  // Dark label color
                                        fontWeight: 'bold',  // Bold label text
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#333',  // Even darker color when focused
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#333',  // Darker border when active
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#333',  // Darker border on hover
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#333',  // Darker border when focused
                                        },
                                    },
                                }}
                            />
                        )}
                        sx={{ width: '100%' }}
                    />
                )}

                <Button
                    variant="contained"
                    onClick={handleSearch}
                    sx={{
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

            {memoizedGifElements.map((item) => (
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
                            p: 2,
                            borderRadius: '8px',
                            textAlign: 'center',
                            overflow: 'auto',
                            display: 'flex',
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
                            }}
                        >
                            {selectedReaction?.name}
                        </Typography>

                        <Box
                            component="img"
                            src={selectedReaction?.image}
                            alt={selectedReaction?.name}
                            sx={{
                                width: 'auto',
                                height: 'auto',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                borderRadius: '8px',
                                objectFit: 'contain',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
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
        </Box>
    );
};

export default HomePage;
