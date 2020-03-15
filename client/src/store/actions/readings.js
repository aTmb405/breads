import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_READINGS, REMOVE_READINGS } from '../actionTypes';

export const loadReadings = readings => ({
    type: LOAD_READINGS,
    readings
});

export const fetchReadings = () => {
    return dispatch => {
        return apiCall('get', '/articles')
            .then(res => {
                dispatch(loadReadings(res));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    }
}

export const postNewReading = url => (dispatch, getState) => {
    let { currentUser } = getState();
    console.log(currentUser);
    const username = currentUser.user.username;
    return apiCall("post", `/users/${username}/articles`, { url })
        .then(res => {})
        .catch(err => dispatch(addError(err.message)));
}