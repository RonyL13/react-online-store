import { combineReducers } from 'redux';
import rendererReducer from './renderer';
import isLoggedInReducer from './loggedIn';
import cartReducer from './cart';


const rootReducer = combineReducers({
    renderer: rendererReducer,
    isLoggedIn: isLoggedInReducer,
    cart: cartReducer
})

export default rootReducer;