import React from 'react';
import { NavLink } from 'react-router-dom';
import DefaultImage from '../images/default-profile-image.jpg';

const UserAside = ({ id, image, username, readings }) => {
    let totalArticles,
        totalBooks;

    // might need global list again
    // readings changes depending on global, user, or subscription
    // maybe have different keys for each state - global readings, user readings, pub readings
    // ******************************
    let totalWords = 0;
    let user = {};
    let user_id;
    // console.log(id);
    // console.log(image);
    // console.log(username);
    if (readings) {
        //change data if within User Readings
        for (const property in readings[0]) {
            user[property] = readings[0][property]
        }
        // console.log(user);
        user_id = id;
        id = user.user_id;
        image = user.image;
        username = user.username;
        readings.forEach(r => {
            totalWords += r.word_count/100000;
        });
        totalArticles = <p className='card-text'>Articles read: <strong>{readings.length}</strong></p>;
        totalBooks = <p className='card-text'>Loaves: <strong>{totalWords.toFixed(2)}</strong></p>;
    }
    
    return (
        <aside className='col-lg-3 col-sm-10 offset-sm-1 offset-lg-0'>
            {/* position-fixed */}
            <div className='card'>
                {/* {readings ? (
                    <img
                        src={image || DefaultImage}
                        alt={username}
                        className='img-thumbnail'
                    />
                ) : ( */}
                    <img
                        src={image || DefaultImage}
                        alt={username}
                        className='img-thumbnail'
                    />
                {/* )} */}
                
                <div className='card-body'>
                    <h5 className='card-title'>{username}</h5>
                    {user_id === id && 
                        <NavLink exact to={`/${id}/pubs`} activeClassName='badge badge-primary' className='badge'>
                            Subscriptions
                        </NavLink>
                    }
                    
                    {totalArticles}
                    {totalBooks}
                </div>
            </div>
        </aside>
    )
}

export default UserAside;