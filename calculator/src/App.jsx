import React, { useState } from 'react';

const App = () => {
    const [input, setInput] = useState('545');

    const handleButtonClick = (value) => {
        if (value === 'c') setInput(' ');
        else if (value === '<') setInput(input.slice(0, -1));
        else if (value === '%') setInput();
        else if (value === '=')
            try {
                setInput(eval(input).toString());
            } catch (err) {
                setInput('Error ❌❌');
            }
        else setInput((pv) => pv + value);
    };

    return (
        <div className='app'>
            <div className='container'>
                <div className='calc'>
                    <div className='display'>
                        <h1 id='input'>{input}</h1>
                    </div>
                    <div className='all-btn'>
                        <div>
                            <button onClick={() => handleButtonClick('c')}>
                                C
                            </button>
                            <button onClick={() => handleButtonClick('<')}>
                                &lt;
                            </button>
                            <button onClick={() => handleButtonClick('%')}>
                                %
                            </button>
                            <button onClick={() => handleButtonClick('/')}>
                                /
                            </button>
                        </div>
                        <div>
                            <button onClick={() => handleButtonClick('7')}>
                                7
                            </button>
                            <button onClick={() => handleButtonClick('8')}>
                                8
                            </button>
                            <button onClick={() => handleButtonClick('9')}>
                                9
                            </button>
                            <button onClick={() => handleButtonClick('*')}>
                                *
                            </button>
                        </div>
                        <div>
                            <button onClick={() => handleButtonClick('4')}>
                                4
                            </button>
                            <button onClick={() => handleButtonClick('5')}>
                                5
                            </button>
                            <button onClick={() => handleButtonClick('6')}>
                                6
                            </button>
                            <button onClick={() => handleButtonClick('-')}>
                                -
                            </button>
                        </div>
                        <div>
                            <button onClick={() => handleButtonClick('1')}>
                                1
                            </button>
                            <button onClick={() => handleButtonClick('2')}>
                                2
                            </button>
                            <button onClick={() => handleButtonClick('3')}>
                                3
                            </button>
                            <button onClick={() => handleButtonClick('+')}>
                                +
                            </button>
                        </div>
                        <div>
                            <button onClick={() => handleButtonClick('0')}>
                                0
                            </button>
                            <button onClick={() => handleButtonClick('00')}>
                                00
                            </button>
                            <button onClick={() => handleButtonClick('.')}>
                                .
                            </button>
                            <button onClick={() => handleButtonClick('=')}>
                                =
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
