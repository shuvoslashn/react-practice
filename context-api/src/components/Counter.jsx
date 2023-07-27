import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const Counter = () => {
    const counterContext = useContext(CounterContext);
    return (
        <div>
            <button
                onClick={() =>
                    counterContext.setCount(counterContext.count + 1)
                }
            >
                increment (++)
            </button>{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
                onClick={() =>
                    counterContext.count === 0
                        ? counterContext.count
                        : counterContext.setCount(counterContext.count - 1)
                }
            >
                decrement (--)
            </button>
            <br />
            <br />
        </div>
    );
};

export default Counter;
