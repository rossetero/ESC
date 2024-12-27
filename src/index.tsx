/*import React from 'react';
import ReactDOM from 'react-dom/client';
  
import App from './app';
  
export default () => <App/>;
  
let rootElement: ReactDOM.Root
  
export const mount = (Сomponent, element = document.getElementById('app')) => {
  const rootElement = ReactDOM.createRoot(element);
  rootElement.render(<Сomponent/>);

  if(module.hot) {
      module.hot.accept('./app', ()=> {
        rootElement.render(<Сomponent/>);
      })
  }
};

export const unmount = () => {
  rootElement.unmount();
};*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Импортируем Provider
import store from '../store';
import App from './app';

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);

let rootElement: ReactDOM.Root;

export const mount = (Component, element = document.getElementById('app')) => {
  const rootElement = ReactDOM.createRoot(element);
  rootElement.render(
    <Provider store={store}>
      <Component />
    </Provider>
  );

  if (module.hot) {
    module.hot.accept('./app', () => {
      rootElement.render(
        <Provider store={store}>
          <Component />
        </Provider>
      );
    });
  }
};

export const unmount = () => {
  rootElement.unmount();
};

