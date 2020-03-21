import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_READINGS } from '../actionTypes'; //REMOVE_READING

export const loadReadings = readings => ({
    type: LOAD_READINGS,
    readings
});

// export const removeReadings = id => ({
//     type: REMOVE_READING,
//     id
// });

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
    return dispatch => { //getState
        // let { currentUser } = getState();
        // const id = currentUser.user.id;
        return apiCall('get', '/articles')
        // return apiCall('get', `/users/${id}/articles`)
            .then(res => {
                // console.log(res);
                dispatch(loadReadings(res));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    }
}

export const fetchUserReadings = () => {
    return (dispatch, getState) => {
        let {currentUser} = getState();
        const id = currentUser.user.id;
        return apiCall('get', `/articles/${id}`)
            .then(res => {
                // console.log(res);
                dispatch(loadReadings(res));
            })
            .catch(err => {
                dispatch(addError(err.message));
            })
    }
}

export const postNewReading = url => (dispatch, getState) => {
    let { currentUser } = getState();
    const id = currentUser.user.id;
    return apiCall('post', `/users/${id}/articles`, { url })
        .then(res => {})
        .catch(err => dispatch(addError(err.message)));
}