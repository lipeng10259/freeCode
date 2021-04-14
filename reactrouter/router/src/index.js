import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
=======
import ReactDOM,{ScrollRestoration} from 'react-dom';
>>>>>>> 03024b85dbc4761b8961133b083f1cd561527758
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

<<<<<<< HEAD
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
      

=======



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
         <App/>
    </BrowserRouter>
>>>>>>> 03024b85dbc4761b8961133b083f1cd561527758
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
