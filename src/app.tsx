import React from 'react'
import { GlobalStyle } from './global'
import { Global } from '@emotion/react'
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";
import i18next from 'i18next'

const App = () => {
  return (

    <BrowserRouter>
    <Global styles={GlobalStyle}/>
    <PageRoutes/>
    </BrowserRouter>
  

  );
};

export default App;
