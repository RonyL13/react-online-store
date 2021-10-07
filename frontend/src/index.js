import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

const stateStore = createStore(rootReducer);

ReactDOM.render(
    <Provider store={stateStore}>
        <App />
    </Provider>
, document.getElementById('root'));