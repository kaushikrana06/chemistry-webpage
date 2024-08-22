import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#333',
                color: '#fff',
                padding: '10px 0',
                position: 'fixed',
                bottom: 0,
                width: '100%',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2">
                © 2024 Chemistry World. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
