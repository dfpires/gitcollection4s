import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

// criando um componente funcional
// App é um componente funcional

const App: React.FC = () => {
  return (
    <> 
      {/* aqui definiremos o SPA*/}
      <BrowserRouter>
        <Routes/> {/* a chamada de qualquer rota vai aparecer o resultado aqui*/}
      </BrowserRouter>
    </>
  );
}

export default App;
