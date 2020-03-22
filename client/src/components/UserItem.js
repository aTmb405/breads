import React from 'react';
import DefaultImage from '../images/default-profile-image.jpg';

const UserItem = ({ id, first, last, username, image }) => { //username, image
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
                {username}
            </div>
        </div>
    )
}

export default UserItem;