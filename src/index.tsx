import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Import BS4
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import BS4 ends
// Import ant design
import 'antd/dist/antd.css';
// Import ant design ends
import 'font-awesome/css/font-awesome.min.css';
// Import redux store & redux-persist library
// import { store, persistor } from './store/index.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from "store/store";
// Import redux store & redux-persist library ends

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} >
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
