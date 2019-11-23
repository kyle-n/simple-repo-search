import {createMuiTheme} from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue'

const dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: lightBlue
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
