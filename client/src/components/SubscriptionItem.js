import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className='d-flex flex-column align-self-stretch'>
                <div className='d-flex flex-row justify-content-between'>
                    <img
                        src={image || DefaultImage}
                        alt={username}
                        height='100'
                        width='100'
                        className='timeline-image'
                    />
                    <Link to={`/${user_id}`}>
                        <p className='btn text-primary m-2'><small>{username}</small></p>
                    </Link>
                    {summary === '' || summary.id != reading_id
                        ? <p onClick={viewSummary} className='btn text-muted m-2 ml-auto'><small>View Summary</small></p>
                        : <p onClick={removeSummary} className='btn text-muted m-2 ml-auto'><small>Remove Summary</small></p>
                    }
                    {isCorrectUser && (
                        <p onClick={removeReading} className='btn text-danger m-2'>
                            <small>Delete</small>
                        </p>
                    )}
                </div>
                {summary.id == reading_id &&
                    <p>{summary.data}</p>
                }
            </div>
        </li>
    )
}

export default SubscriptionItem;