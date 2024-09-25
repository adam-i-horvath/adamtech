import React from 'react';
import { Button } from '@mui/material';

function ContactButton({ handleOpen }) {
  return (
    <Button
      variant="outlined"
      color="primary"
      sx={{
        mt: 4,
        fontSize: '1.25rem',
        fontWeight: 'bold',
        padding: '12px 24px',
      }}
      onClick={handleOpen}
    >
      Contact
    </Button>
  );
}

export default ContactButton;
