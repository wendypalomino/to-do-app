import React from 'react';
import { TodosProvider } from '../TodoContext';
import { AppUI } from './AppUI';

function App() {
  
  return (
    <TodosProvider>
        <AppUI/>
    </TodosProvider>
  );
}

export default App;

