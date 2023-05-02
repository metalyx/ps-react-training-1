import React from 'react';
import './List.css';

function List({ list }) {
    return (
        <div className='list-container'>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default List;
