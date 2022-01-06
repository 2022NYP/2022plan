import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
const GlobalStyle = createGlobalStyle`
 ${reset}
 @font-face {
   font-family: 'KOTRA';
   src: url('../../font/KOTRA_SONGEULSSI.otf');
 }
 body{
  margin: 0;
  padding: 0;
  font-family: 'KOTRA';
  }
  a {
    text-decoration: none;
  }

`

export default GlobalStyle
