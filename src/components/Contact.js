import React, { useState } from 'react';
import { Modal } from '@mui/material';
import ContactButton from './ContactButton';
import ContactModalContent from './ContactModalContent';

function Contact({ darkMode }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ContactButton handleOpen={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ContactModalContent darkMode={darkMode} />
      </Modal>
    </div>
  );
}

export default Contact;
