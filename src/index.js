import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import {searchPokemon, requestPokemon} from "./reducers.js";

//Middleware

import {createLogger} from "redux-logger";

const logger = createLogger();

//Combine Reducers
const rootReducer = combineReducers({searchPokemon, requestPokemon});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
