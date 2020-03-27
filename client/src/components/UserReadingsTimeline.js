import React from 'react';
import UserAside from './UserAside';
import UserReadingsList from '../containers/UserReadingsList';

const UserReadingsTimeline = props => {
    return (
        <div className='row'>
            <UserAside
                id={props.id}
                image={props.image}
                username={props.username}
                readings={props.readings}
            />
            <UserReadingsList match={props.match}/>
        </div>
    )
}

export default UserReadingsTimeline;