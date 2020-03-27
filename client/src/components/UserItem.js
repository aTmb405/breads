import React from 'react';
import { Link } from 'react-router-dom';
import DefaultImage from '../images/default-profile-image.jpg';

const UserItem = ({ id, first, last, username, image }) => {
    return (
        <div className='card'>
            <img
                src={image || DefaultImage}
                alt={username}
                className='img-thumbnail'
            />
            <div className='card-body'>
                <h5 className='card-title'>{username}</h5>
                {first} {last}
                <Link to={`/${id}`}>
                    <p>{username}</p>
                </Link>
                <Link to={`/${id}/pubs`}>
                    <p>Subscriptions</p>
                </Link>
            </div>
        </div>
    )
}

export default UserItem;