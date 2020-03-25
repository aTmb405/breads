import React from 'react';
import { Link } from 'react-router-dom';
import DefaultImage from '../images/default-profile-image.jpg';

const UserAside = ({ image, username, readings }) => {
    let totalArticles,
        totalBooks;
        // not working
        // console.log(list);
    // let totalWords = 0;
    // readings.forEach(r => {
    //     totalWords += (r.word_count/100000);
    // });
    // totalArticles = <p className='card-text'>Articles read: <strong>{readings.length}</strong></p>;
    // totalBooks = <p className='card-text'>Book Equivalents: {totalWords}</p>;
    
    return (
        <aside className='col-sm-2'>
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