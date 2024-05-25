import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import U2k from './pages/4u2k-page'
// import B2B from './pages/b2b-page'
// import Main from './pages/main-page'
// import Games from './pages/games'
// import Price from './pages/price-page'
// import NotFound from './pages/not-found'
import { GlobalStyle } from './global'
import { Global } from '@emotion/react'
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";
// import './styles/main'
const App = () => {
  return (

    <BrowserRouter>
    <Global styles={GlobalStyle}/>
    <PageRoutes/>
    </BrowserRouter>
  

  );
};

export default App;

