import React from 'react';
import UserAside from './UserAside';
import UserReadingsList from '../containers/UserReadingsList';

const UserReadingsTimeline = props => {
    return (
        <div className='row'>
            {/* {props.readings ? (
                <UserAside
                    id={props.readings[0].id}
                    image={props.readings[0].image}
                    username={props.readings[0].username}
                    readings={props.readings}
                />
            ) : ( */}
                <UserAside
                    id={props.id}
                    image={props.image}
                    username={props.username}
                    readings={props.readings}
                />
            {/* )} */}
            
            <UserReadingsList match={props.match}/>
        </div>
    )
}

export default UserReadingsTimeline;