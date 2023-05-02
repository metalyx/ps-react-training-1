import React, { useState } from 'react';
import './FancyDiv.css';
import { getRandomNumber } from '../../helpers/getRandomNumber';

function FancyDiv() {
    const [styles, setStyles] = useState({});

    const handleClick = () => {
        const cssPropeties = {
            background: `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`,
        };

        setStyles(cssPropeties);
    };

    return (
        <div className='fancy-div' style={styles} onClick={handleClick}>
            Click Me
        </div>
    );
}

export default FancyDiv;
