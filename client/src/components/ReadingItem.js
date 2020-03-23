import React from 'react';
// import { connectAdvanced } from 'react-redux';
// import Moment from 'react-moment';
// import { Link } from 'react-router-dom';
// import DefaultImage from '../images/default-profile-image.jpg';

const ReadingItem = ({ id, title, domain, url, word_count, user_id, summary, viewSummary, removeSummary, removeReading, isCorrectUser, newSubscription }) => { //username, image
    return (
        <li className='list-group-item d-flex flex-column justify-content-between'>
            {/* if list === 'global' */}
            {/* <img
                src={image || DefaultImage} //not correct user
                alt={username} //not correct user
                height='100'
                width='100'
                className='timeline-image'
            /> */}
            <h5 className='reading-area d-flex flex-column align-self-stretch'>{title}</h5>
            <div className='reading-area d-flex flex-column align-self-stretch'>
                <div className='d-flex flex-row justify-content-between'>
                <p className='lead'>{domain}</p>
                {summary === '' || summary.id != id
                    ? <button onClick={viewSummary} className='btn btn-outline-primary btn-sm m-2'>View Summary</button>
                    : <button onClick={removeSummary} className='btn btn-outline-primary btn-sm m-2'>Remove Summary</button>
                }
            </div>
            </div>
            {summary.id == id &&
                <p>{summary.data}</p>
            }
            <div className='d-flex flex-column align-self-stretch'>
                <div className='d-flex flex-row justify-content-between'>
                    <button onClick={newSubscription} className='btn btn-outline-secondary btn-sm m-2'>{user_id}</button>
                    <span className='text-muted d-flex ml-auto'>
                        <p>~{word_count} words</p>
                    </span>
                    {isCorrectUser && (
                        <button onClick={removeReading} className='btn btn-outline-danger btn-sm m-2'>
                            Delete
                        </button>
                    )}
                
                </div>
            </div>
        </li>
    )
}

export default ReadingItem;