import React, { useState } from 'react';
import './DisplayInput.css';

function DisplayInput() {
    const [input, setInput] = useState('');
    const [isDisplayed, setIsDisplayed] = useState(false);

    const clickHandle = () => {
        setIsDisplayed((prevState) => !prevState);
    };

    return (
        <div className='displayInput'>
            <label htmlFor='displayInput'>Type Something Below:</label>
            <input
                id='displayInput'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={clickHandle}>Toggle display of the content</button>
            {isDisplayed && <>{input}</>}
        </div>
    );
}

export default DisplayInput;
