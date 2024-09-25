import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import ThemeSwitcher from './components/ThemeSwitcher';
import Contact from './components/Contact';
import PageLoadTime from './components/PageLoadTime';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeightBold: 800,
      h4: {
        fontSize: '2rem',
        fontWeight: 'bold',
      },
      button: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
      },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#ff4081',
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        {' '}
        <Box>
          <PageLoadTime />
        </Box>
        <Header theme={theme} />
        <ThemeSwitcher
          darkMode={darkMode}
          handleThemeChange={handleThemeChange}
        />
        <Contact darkMode={darkMode} />
        <Box
          sx={{
            mt: 4,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '0.85rem',
          }}
        >
          React / JavaScript / MySQL / VBA / Node.js
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
