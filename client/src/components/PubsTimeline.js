import React from 'react';
import UserAside from './UserAside';
import PubsList from '../containers/PubsList';

const PubsTimeline = props => {
    return (
        <div className='row'>
            <UserAside
                id={props.id}
                image={props.image}
                username={props.username}
                readings={props.readings}
            />
            <PubsList match={props.match}/>
        </div>
    )
}

export default PubsTimeline;