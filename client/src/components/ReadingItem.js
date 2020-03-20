import React from 'react';
// import Moment from 'react-moment';
// import { Link } from 'react-router-dom';

const ReadingItem = ({ url, word_count }) => {
    return (
        <div className='reading-area'>
            <li className='list-group-item'>
                <p>{url} </p>
                <p>{word_count}</p>
            </li>
        </div>
    )
}

export default ReadingItem;