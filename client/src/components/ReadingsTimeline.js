import React from 'react';
import UserAside from './UserAside';
import ReadingsList from '../containers/ReadingsList';
import UserReadingsList from '../containers/UserReadingsList';

const ReadingsTimeline = props => {
    return (
        <div className='row'>
            <UserAside
                image={props.image}
                username={props.username}
            />
            {props.list === 'global' ? (
                <ReadingsList />
            ) : (
                <UserReadingsList />
            )}
        </div>
    )
}

export default ReadingsTimeline;