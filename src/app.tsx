import React from 'react'
import { GlobalStyle } from './global'
import { Global } from '@emotion/react'
import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";

const App = () => {
  return (

    <BrowserRouter>
    <Global styles={GlobalStyle}/>
    <PageRoutes/>
    </BrowserRouter>
  

  );
};

export default App;

