import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import allReducers from './reducers/index';
import {Provider} from 'react-redux';
import WebPage from './components/webPage';
import {open} from "./websocket/ws";

open();

const store = createStore (allReducers);

ReactDOM.render(
    <Provider store={store}>
        <WebPage/>
    </Provider>,
    document.getElementById('app')
);

export default store;
