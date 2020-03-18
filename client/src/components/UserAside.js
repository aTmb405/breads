import React from 'react';
import DefaultImage from '../images/default-profile-image.jpg';

const UserAside = ({ image, username }) => (
    <aside className='col-sm-2'>
        <div className='card'>
                <img
                    src={image || DefaultImage}
                    alt={username}
                    className='img-thumbnail'
                />
            <div className='card-body'>
                <h5 className='card-title'>{username}</h5>
            </div>
        </div>
    </aside>
);

export default UserAside;