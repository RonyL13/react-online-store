import { useState } from 'react';
import '../styles/counter.css'

const Counter = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        if (count === 1) return; // Not allowing less than 1 of an item
        setCount(prev => prev - 1)
    }

    return (
        <div className="counter-container">
            <button onClick={increment}>+</button>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter
