import React from 'react';
import ReadingsList from '../containers/ReadingsList';
import UserAside from './UserAside';

const ReadingsTimeline = props => {
    return (
        <div className='row'>
            <UserAside
                image={props.image}
                username={props.username}
            />
            <ReadingsList />
        </div>
    )
}

export default ReadingsTimeline;