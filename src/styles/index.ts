import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
 
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }
  h1 {
    margin: 0;
  }
`