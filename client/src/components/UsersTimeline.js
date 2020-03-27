import React from 'react';
import UserAside from './UserAside';
import UsersList from '../containers/UsersList';

const UsersTimeline = props => {
    return (
        <div className='row'>
            <UserAside
                id={props.id}
                image={props.image}
                username={props.username}
                readings={props.readings}
            />
            <UsersList /> 
        </div>
    )
}

export default UsersTimeline;