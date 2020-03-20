import React from 'react';
import UserAside from './UserAside';
import ReadingsList from '../containers/ReadingsList';
import UserReadingsList from '../containers/UserReadingsList';

const ReadingsTimeline = props => {
    console.log(props.list);
    return (
        <div className='row'>
            <UserAside
                image={props.image}
                username={props.username}
                list={props.list}
                readings={props.readings}
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