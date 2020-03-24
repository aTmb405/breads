import React from 'react';
// import { connectAdvanced } from 'react-redux';
// import Moment from 'react-moment';
// import { Link } from 'react-router-dom';
import DefaultImage from '../images/default-profile-image.jpg';

const ReadingItem = ({ id, title, domain, url, word_count, username, image, user_id, summary, viewSummary, removeSummary, removeReading, isCorrectUser, newSubscription }) => {
    return (
        <li className='list-group-item d-flex flex-column justify-content-between'>
            <h5 className='reading-area d-flex flex-column align-self-stretch'>{title}</h5>
            <div className='reading-area d-flex flex-column align-self-stretch'>
                <div className='d-flex flex-row justify-content-between'>
                <p className='lead'>{domain}</p>
                <p className='text-muted ml-auto'>~{Number(word_count).toLocaleString()} words</p>
            </div>
            </div>
            {summary.id == id &&
                <p>{summary.data}</p>
            }
            <div className='d-flex flex-column align-self-stretch'>
                <div className='d-flex flex-row justify-content-between'>
                    <img
                        src={image || DefaultImage}
                        alt={username}
                        height='100'
                        width='100'
                        onClick={newSubscription}
                        className='timeline-image'
                    />
                    {summary === '' || summary.id != id
                        ? <button onClick={viewSummary} className='btn btn-outline-primary btn-sm m-2 d-flex ml-auto'>View Summary</button>
                        : <button onClick={removeSummary} className='btn btn-outline-primary btn-sm m-2 d-flex ml-auto'>Remove Summary</button>
                    }
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