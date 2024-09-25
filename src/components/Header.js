import React from 'react';
import { Typography } from '@mui/material';

function Header({ theme }) {
  return (
    <Typography variant="h4" component="h1" color="primary" align="center">
      Hello, I'm{' '}
      <span style={{ color: theme.palette.secondary.main }}>Adam</span>,
      full-stack developer
    </Typography>
  );
}

export default Header;
