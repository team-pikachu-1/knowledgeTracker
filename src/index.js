import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './App.css';

// ReactDOM.render(
//   <App> <div>Hello webpack</div> </App>,
//   document.getElementById('root')
// );

render(
  <App />,
  document.getElementById('app')
);

console.log('omg its working'); 