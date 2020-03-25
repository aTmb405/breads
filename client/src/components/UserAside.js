import React from 'react';
import { Link } from 'react-router-dom';
import DefaultImage from '../images/default-profile-image.jpg';

const UserAside = ({ image, username, readings }) => {
    let totalArticles,
        totalBooks;

    // might need global list again
    // readings changes depending on global, user, or subscription
    // maybe have different keys for each state - global readings, user readings, pub readings
    // ******************************
    // let totalWords = 0;
    // readings.forEach(r => {
    //     totalWords += r.word_count/100000;
    // });
    // totalArticles = <p className='card-text'>Articles read: <strong>{readings.length}</strong></p>;
    // totalBooks = <p className='card-text'>Loaves: <strong>{totalWords.toFixed(2)}</strong></p>;
    
    return (
        <aside className='col-sm-2 position-fixed'>
            <div className='card'>
                <img
                    src={image || DefaultImage}
                    alt={username}
                    className='img-thumbnail'
                />
                <div className='card-body'>
                    <h5 className='card-title'>{username}</h5>
                    <Link to='/pubs'>
                        <p>Subscriptions</p>
                    </Link>
                    {totalArticles}
                    {totalBooks}
                </div>
            </div>
        </aside>
    )
}

export default UserAside;