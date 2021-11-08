import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './pages/Header';
// criando um componente funcional
// App é um componente funcional
import {Routes} from './routes'

import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes/>
        </BrowserRouter>
    <GlobalStyle/>
    </>
    );
}

export default App;
