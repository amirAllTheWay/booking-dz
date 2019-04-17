import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import reducer from './store/reducer';



import * as serviceWorker from './serviceWorker';


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

const store = createStore(reducer, applyMiddleware(logger, thunk));


ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
