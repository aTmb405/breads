import React from 'react';

const SubscriptionItem = ({ pub_id, sub_id }) => { //username, image
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{pub_id}</h5>
                
                {sub_id}
            </div>
        </div>
    )
}

export default SubscriptionItem;