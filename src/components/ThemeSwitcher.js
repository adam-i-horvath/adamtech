import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';

function ThemeSwitcher({ darkMode, handleThemeChange }) {
  return (
    <FormControlLabel
      control={<Switch checked={darkMode} onChange={handleThemeChange} />}
      label="Dark Mode"
      sx={{ mt: 2 }}
    />
  );
}

export default ThemeSwitcher;
