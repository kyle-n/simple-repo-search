import React from 'react';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import {themes} from './themes';

function App() {
  return (
    // Hardcoded to dark mode, but could refactor to accept a prop from redux or other
    // global app state manager that would track the current theme
    <ThemeProvider theme={themes['dark']}>
      <CssBaseline>
        <Container component="main">
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
