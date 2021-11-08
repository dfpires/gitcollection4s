// importa biblioteca react
import React from 'react';
// importa biblioteca react-dom
import ReactDOM from 'react-dom';
// importa o primeiro componente React chamado App
import App from './App';

ReactDOM.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>,

  document.getElementById('root')
);

// o que o componente App retornará será exibido no elemento HTML cujo id é root