import {PaletteMode, ThemeOptions} from '@mui/material';

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
   typography: {
      fontFamily: ['Poppins', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif',].join(','),
   },
   palette: {
      mode,
      ...{
         contrastThreshold: 3,
         tonalOffset: 0.2
      },
      ...(mode === 'light'
          ? {
             primary: {
                main: '#000',
             },
             secondary: {
                main: '#5C76B7'
             },
             error: {
                main: '#F40B27'
             },
             text: {
                primary: '#000',
                secondary: '#bbb',
             },
          }
          : {
             primary: {
                main: '#d562ff',
             },
             secondary: {
                main: '#03dcff'
             },
             error: {
                main: '#ff5b5b'
             },
          }),
   },
});
