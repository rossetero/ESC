import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import i18next from 'i18next'
import { i18nextReactInitConfig } from './i18next'
  
export default () => <App/>
  
let rootElement: ReactDOM.Root

i18next.t = i18next.t.bind(i18next)
const i18nextPromise = i18nextReactInitConfig(i18next)
  
export const mount = async (Сomponent, element = document.getElementById('app')) => {
  const rootElement = ReactDOM.createRoot(element)
  await i18nextPromise

  rootElement.render(<Сomponent/>)

  

  if(module.hot) {
    await i18next.reloadResources()

    module.hot.accept('./app', ()=> {
      rootElement.render(<Сomponent/>)
    })
  }
}

export const unmount = () => {
  rootElement.unmount()
}
