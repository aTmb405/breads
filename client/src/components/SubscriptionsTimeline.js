import React from 'react';
import UserAside from './UserAside';
import SubscriptionsList from '../containers/SubscriptionsList';

const SubscriptionsTimeline = props => {
    return (
        <div className='row'>
            <UserAside
                id={props.id}
                image={props.image}
                username={props.username}
                readings={props.readings}
            />
            <SubscriptionsList />
        </div>
    )
}

export default SubscriptionsTimeline;