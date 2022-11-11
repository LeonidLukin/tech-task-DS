import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
 
export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-family: roboto, sans-serif;
  }
`
