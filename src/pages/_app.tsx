import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {createTheme, ThemeProvider} from '@mui/material';
import TheHeader from '@/app/layout/components/the-header/TheHeader';
import TheFooter from '@/app/layout/components/the-footer/TheFooter';
import {getDesignTokens} from '@/app/shared/design/theme';

export default function App({Component, pageProps}: AppProps) {
   const theme = createTheme(getDesignTokens('light'));

   return (
       <ThemeProvider theme={theme}>
          <TheHeader />
          <Component {...pageProps} />
          <TheFooter />
       </ThemeProvider>
   )
}
