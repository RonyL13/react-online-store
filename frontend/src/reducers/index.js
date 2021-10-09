import { combineReducers } from 'redux';
import rendererReducer from './renderer';
import isLoggedInReducer from './loggedIn';


const rootReducer = combineReducers({
    renderer: rendererReducer,
    isLoggedIn: isLoggedInReducer
})

export default rootReducer;