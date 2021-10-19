import { createGlobalStyle } from "styled-components";

import imgBackground from '../assets/background.svg'

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        // tamanho da fonte 16px
        @media (max-width: 1080px) { // pc
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) { // celular
            font-size: 87.5%; // 14px
        }
    } 
    body {
        background: #f0f0f5 url(${imgBackground}) no-repeat 70% top;
        -webkit-font-smoothing: antialiased;
    }
`