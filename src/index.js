import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./appstate/state.js";


import {default as FChat} from './features/login';

const reduxStore = configureStore( window.REDUX_INITIAL_DATA );
ReactDOM.render( <ReduxProvider store={reduxStore}>
    <FChat />
  </ReduxProvider>,document.getElementById('app'));

console.log("I am done");
