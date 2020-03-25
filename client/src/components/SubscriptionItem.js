import React from 'react';
import DefaultImage from '../images/default-profile-image.jpg';

const SubscriptionItem = ({ reading_id, title, domain, url, word_count, username, image, user_id, summary, viewSummary, removeSummary, removeReading, isCorrectUser }) => {
    return (
        <li className='list-group-item d-flex flex-column justify-content-between'>
            <h5 className='reading-area d-flex flex-column align-self-stretch'>{title}</h5>
            <div className='reading-area d-flex flex-column align-self-stretch'>
                <div className='d-flex flex-row justify-content-between'>
                    <p className='lead'>{domain}</p>
                    <p className='text-muted ml-auto'>~{Number(word_count).toLocaleString()} words</p>
                </div>
            </div>
            {summary.id == reading_id &&
                <p>{summary.data}</p>
            }
            <div className='d-flex flex-column align-self-stretch'>
                <div className='d-flex flex-row justify-content-between'>
                    <img
                        src={image || DefaultImage}
                        alt={username}
                        height='100'
                        width='100'
                        className='timeline-image'
                    />
                    <p className='text-muted'>{username}</p>
                    {summary === '' || summary.id != reading_id
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

export default SubscriptionItem;