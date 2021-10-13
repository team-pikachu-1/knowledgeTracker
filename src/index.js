import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './App.css';
import store from '../redux/store';

// ReactDOM.render(
//   <App> <div>Hello webpack</div> </App>,
//   document.getElementById('root')
// );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
); 