import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_SUBSCRIPTIONS } from '../actionTypes';

export const loadSubscriptions = subscriptions => ({
    type: LOAD_SUBSCRIPTIONS,
    subscriptions
});

export const postNewSubscription = pub_id => (dispatch, getState) => {
    let { currentUser } = getState();
    const sub_id = currentUser.user.id;
    return apiCall('post', `/subscribe`, { sub_id, pub_id })
        .then(res => {})
        .catch(err => dispatch(addError(err.message)));
}

// display user's subscriptions
export const fetchSubscriptions = () => {
    return (dispatch, getState) => {
        let {currentUser} = getState();
        const id = currentUser.user.id;
        return apiCall('get', `/subscriptions/${id}`)
            .then(res => {
                dispatch(loadSubscriptions(res));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    }
}