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
    #root {
        max-width: 960px; // largura máxima
        margin: 0 auto; // 0 para baixo e para cima auto esquerda e direita
        padding: 2.5rem 1.25rem; // 1 rem 16px
        // 40px abaixo e acima 20px direita e esquerda
    }
    button {
        cursor: pointer;
    }
    a {
        color: inherit; // cor herdada do elemento pai
        text-decoration: none;
    }
`