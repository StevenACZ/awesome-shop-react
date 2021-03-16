// React
import React from 'react';

// React Router
import { HashRouter } from 'react-router-dom';
import Routes from './routes/Routes';

// Styles
import GlobalStyle from './theme/globalStyle';

// Components
import Header from './components/layout/header/Header';

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Header />
      <Routes />
    </HashRouter>
  );
}

export default App;
