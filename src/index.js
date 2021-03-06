import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import {Provider} from 'react-redux'
import generateStore from './Redux/store.js'

const store = generateStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

