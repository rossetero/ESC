import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import U2k from './pages/4u2k-page'
import B2B from './pages/b2b-page'
import Main from './pages/main-page'
import Games from './pages/games'
import Price from './pages/price-page'
import NotFound from './pages/not-found'
import { GlobalStyle } from './global'
import { Global } from '@emotion/react'
// import './styles/main'
const App = () => {
  return (

    <Router>
      <Global styles={GlobalStyle} />
      <Routes>
        <Route path="/esc" Component={Main} />
        <Route path="/esc/b2b" Component={B2B} />
        <Route path="/esc/4u2k" Component={U2k} />
        <Route path="/esc/games" Component={Games} />
        <Route path="/esc/pricelist" Component={Price} />
        <Route path="/esc/*" Component={NotFound} />
      </Routes>
    </Router>

  );
};

export default App;

