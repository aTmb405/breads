import React from 'react';
import UserAside from './UserAside';
import UserReadingsList from '../containers/UserReadingsList';

const UserTimeline = props => {
    return (
        <div className='row'>
            <UserAside
                image={props.image}
                username={props.username}
                list={props.list}
                readings={props.readings}
            />
            <UserReadingsList />
        </div>
    )
}

export default UserTimeline;