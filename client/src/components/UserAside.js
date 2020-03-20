import React from 'react';
import DefaultImage from '../images/default-profile-image.jpg';

const UserAside = ({ image, username, list, readings }) => {
    let totalArticles,
        totalBooks;
    if (list === 'user') {
        let totalWords = 0;
        readings.forEach(r => {
            totalWords += (r.word_count/60000);
        });
        totalArticles = <p className='card-text'>Articles read: <strong>{readings.length}</strong></p>;
        totalBooks = <p className='card-text'>Book Equivalents: {totalWords}</p>;
    }
    

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
                    {totalArticles}
                    {totalBooks}
                </div>
            </div>
        </aside>
    )
}

export default UserAside;