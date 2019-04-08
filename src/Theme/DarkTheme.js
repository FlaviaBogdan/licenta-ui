// src/ui/theme/index.js

import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#212121' },
  secondary: { main: '#C51162' }
};
const typography= {
  
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
};
const themeName = 'Mine Shaft Red Violet Andean Condor';

export default createMuiTheme({ palette,typography : { useNextVariants : true}, themeName });
