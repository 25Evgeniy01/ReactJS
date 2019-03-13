import ReactDOM from 'react-dom';
import React from 'react';
import Navigation from './app';
import {createStore} from "redux";
import rootReducer from "./reducers/index";
import {Provider} from 'react-redux';

const ws = new WebSocket('ws://localhost:8081');
let messageParse;

const place = document.getElementById('app');

const store = createStore(rootReducer);



ws.onopen = () => {
    let req = {
        commandName: "getJSON",
    };
    ws.send(JSON.stringify(req));
    console.log("Connection success");
};

ws.onmessage = (message) => {

    console.log(message);

    setTimeout(() => {
        //through time error - Unexpected end of JSON input
        messageParse = JSON.parse(message.data);
        store.getState().userInfo.user = messageParse.users;

        ReactDOM.render(
            <Provider store={store}>
                <Navigation />
            </Provider>
            ,
            place
        )
    },1500);

};

ReactDOM.render(
    <div className={'container'}>
        <div className={'row'}>
            <div className={'col-md-4'}>

            </div>
            <div className={'col-md-4 text-center'} style={{marginTop: '6em'}}>
                <img src={'./img/u_1.png'}/>
            </div>
            <div className={'col-md-4'}>

            </div>
        </div>
    </div>
    ,
    place
);

export {
    store
};

