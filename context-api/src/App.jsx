import React, { useContext } from 'react';
import Counter from './components/Counter';
import { CounterContext } from './context/CounterContext';

const App = () => {
    const counterState = useContext(CounterContext);

    return (
        <div>
            <h2>Context API</h2>
            <h1>{counterState.count}</h1>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </div>
    );
};

export default App;
