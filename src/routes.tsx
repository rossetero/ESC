import React  from "react"
import {Routes, Route} from 'react-router-dom'

import U2k from './pages/4u2k-page'
import B2B from './pages/b2b-page'
import Main from './pages/main-page'
import Games from './pages/games'
import Price from './pages/price-page'
import NotFound from './pages/not-found'
import { URLs } from "./__data__/urls"

export const PageRoutes = () =>(
  <Routes>
    <Route path="*" element={<NotFound/>}/> 
    <Route path={URLs.baseUrl} element={<Main/>}/>
    <Route path={URLs.ui.games.url} element={<Games/>}/>
    <Route path={URLs.ui.prices.url} element={<Price/>}/>
    <Route path={URLs.ui.b2b.url} element={<B2B/>}/>
    <Route path={URLs.ui.u2k.url} element={<U2k/>}/>
  </Routes>

)