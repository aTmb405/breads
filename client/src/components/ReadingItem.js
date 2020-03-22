import React from 'react';
// import { connectAdvanced } from 'react-redux';
// import Moment from 'react-moment';
// import { Link } from 'react-router-dom';
// import DefaultImage from '../images/default-profile-image.jpg';

const ReadingItem = ({ id, title, domain, url, user_id, word_count, summary, viewSummary, removeSummary, removeReading, isCorrectUser }) => { //username, image
    console.log(summary);
    console.log(id);
    return (
        <li className='list-group-item'>
            {/* if list === 'global' */}
            {/* <img
                src={image || DefaultImage} //not correct user
                alt={username} //not correct user
                height='100'
                width='100'
                className='timeline-image'
            /> */}
            <div className='reading-area'>
                    <p>{title}</p>
                    <p>{domain}</p>
                    <p>User: {user_id}</p>
                    {summary === '' || summary.id != id
                        ? <button onClick={viewSummary} className='btn btn-outline-primary btn-sm mb-2'>View Summary</button>
                        : <button onClick={removeSummary} className='btn btn-outline-primary btn-sm mb-2'>Remove Summary</button>
                    }
                    {summary.id == id &&
                        <p>{summary.data}</p>
                    }
                    <p>Words in Article: ~{word_count}</p>
                    {isCorrectUser && (
                        <button className='btn btn-outline-danger btn-sm' onClick={removeReading}>
                            Delete
                        </button>
                    )}
            </div>
        </li>
    )
}

export default ReadingItem;