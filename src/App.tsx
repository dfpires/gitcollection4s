import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { GlobalStyle } from './style/global';

// criando um componente funcional
// App é um componente funcional

const App: React.FC = () => {
  return (
    <> 
      {/* aqui definiremos o SPA*/}
      <BrowserRouter>
        <Routes/> {/* a chamada de qualquer rota vai aparecer o resultado aqui*/}
      </BrowserRouter>
      <GlobalStyle/>
    </>
  );
}

export default App;
