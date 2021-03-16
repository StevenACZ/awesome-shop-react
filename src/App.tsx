import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes />
      </HashRouter>
    </div>
  );
}

export default App;
