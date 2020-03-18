import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_READINGS, REMOVE_READING } from '../actionTypes';

export const loadReadings = readings => ({
    type: LOAD_READINGS,
    readings
});

export const removeReadings = id => ({
    type: REMOVE_READING,
    id
});

// export const removeReading = (user_id, article_id) => {
//     return dispatch => {
//       return apiCall('delete', `/api/users/${user_id}/articles/${article_id}`)
//         .then(() => dispatch(remove(article_id)))
//         .catch(err => {
//           dispatch(addError(err.message));
//         });
//     };
// };

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
    const username = currentUser.user.username;
    return apiCall('post', `/users/${username}/articles`, { url })
        .then(res => {})
        .catch(err => dispatch(addError(err.message)));
}