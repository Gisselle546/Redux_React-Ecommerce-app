import React from 'react';
import ReactDOM from 'react-dom';
import jwt from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './store/reducers';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const checktokenexpiration = store => next =>action=>{
  const token = localStorage.getItem('token')
    if(jwt(token).exp<Date.now()/1000){
      next(action)
      localStorage.clear();
    }
    next(action);
}

const store = createStore(reducers,{
  auth:{ authenticated:localStorage.getItem('token')}
},composeEnhancers(
    applyMiddleware(thunk,checktokenexpiration)));


const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
