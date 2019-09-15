import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import myReducer from './reducers/index';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
var store = createStore(myReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
        <App />
    </Router>
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
