import React from 'react';
// import { connectAdvanced } from 'react-redux';
// import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultImage from '../images/default-profile-image.jpg';

const ReadingItem = ({ id, title, domain, url, word_count, username, image, user_id, summary, viewSummary, removeSummary, removeReading, isCorrectUser, newSubscription }) => {
    return (
        <li className='list-group-item'>
            <h5 className='row'><a href={`${url}`} target='_blank'  rel='noopener' className='.text-dark'>{title}</a></h5>
            <div className='row reading-area'>
                <p className='lead'>{domain}</p>
                <p className='text-muted ml-auto'>~{Number(word_count).toLocaleString()} words</p>
            </div>
            <div className='row'>
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
                <p onClick={newSubscription} className='btn text-muted m-2'><small>Subscribe</small></p>
                {summary === '' || summary.id != id
                    ? <p onClick={viewSummary} className='btn text-muted m-2 ml-auto'><small>View Summary</small></p>
                    : <p onClick={removeSummary} className='btn text-muted m-2 ml-auto'><small>Remove Summary</small></p>
                }
                {isCorrectUser && (
                    <p onClick={removeReading} className='btn text-danger m-2'>
                        <small>Delete</small>
                    </p>
                )}
                {summary.id == id &&
                    <p>{summary.data}</p>
                }
            </div>
        </li>
    )
}

export default ReadingItem;