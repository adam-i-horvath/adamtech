import React from 'react';
import { Box, Typography } from '@mui/material';

function ContactModalContent({ darkMode }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        color: darkMode ? 'white' : 'black',
        backgroundColor: darkMode ? '#333333' : 'white',
        textAlign: 'center', // Center the text
      }}
    >
      <Typography id="modal-title" variant="h6" component="h2">
        Under development
      </Typography>
      <Typography id="modal-description" sx={{ mt: 2 }}>
        This feature is currently under development. Please check back later.
      </Typography>
    </Box>
  );
}

export default ContactModalContent;
