import React from 'react';
import { Dashboard } from './pages/Dashboard';
import { Repository } from './pages/Repository';

// criando um componente funcional
// App é um componente funcional

const App: React.FC = () => {
  return (
    <> 
      <h1> Hello World </h1>
      <h2> Hello World 2 </h2>
      <Dashboard/>
      <Repository/>
    </>
  );
}

export default App;
