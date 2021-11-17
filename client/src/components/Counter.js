import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity } from '../actions/cartActions';

import '../styles/counter.css'

const Counter = (props) => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(incrementQuantity(props.index))
    }

    const decrement = () => {

    }

    return (
        <div className="counter-container">
            <button onClick={increment}>+</button>
            <p>{state.cart[props.index].quantity}</p>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter
