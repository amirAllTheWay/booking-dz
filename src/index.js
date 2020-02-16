import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import reducer from './store/reducer';
import { BrowserRouter } from 'react-router-dom';


import * as serviceWorker from './serviceWorker';

const app = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(e) {
        console.log(e)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch(e) {
        console.log(e)
        return undefined
    }
}

const persistedState = loadFromLocalStorage()

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching: ', action);
            const result = next(action);
            console.log('[Middleware] next state: ', store.getState());
            return result;
        }
    }
}

const store = createStore(
    reducer,
    persistedState,
    applyMiddleware(logger, thunk));

store.subscribe(() => saveToLocalStorage(store.getState()))


ReactDOM.render(<Provider store={store}> {app} </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
