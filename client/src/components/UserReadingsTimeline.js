import React from 'react';
import UserAside from './UserAside';
import UserReadingsList from '../containers/UserReadingsList';

const UserReadingsTimeline = props => {
    return (
        <div className='row'>
            <UserAside
                image={props.image}
                username={props.username}
                readings={props.readings}
            />
            <UserReadingsList />
        </div>
    )
}

export default UserReadingsTimeline;