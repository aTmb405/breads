import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_USERS } from '../actionTypes';

export const loadUsers = users => ({
    type: LOAD_USERS,
    users
});

export const fetchUsers = () => {
    return dispatch => {
        return apiCall('get', '/users')
            .then(res => {
                dispatch(loadUsers(res));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    }
}

export const fetchPubs = () => {
    return (dispatch, getState) => {
        const { currentUser } = getState();
        const id = currentUser.user.id;
        return apiCall('get', `/users/${id}`)
            .then(res => {
                dispatch(loadUsers(res));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    }
}