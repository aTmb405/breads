import React from 'react';
import UserAside from './UserAside';
import ReadingsList from '../containers/ReadingsList';

const ReadingsTimeline = props => {
    return (
        <div className='row'>
            <UserAside
                id={props.id}
                image={props.image}
                username={props.username}
                // readings={props.readings}
            />
            <ReadingsList />
        </div>
    )
}

export default ReadingsTimeline;