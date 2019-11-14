import {createMuiTheme} from '@material-ui/core';

const dark = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    h1: {
      fontSize: 48
    }
  }
});

const light = createMuiTheme({
  palette: {
    type: 'light',
  }
});

const themes = {dark, light};

export default themes;
