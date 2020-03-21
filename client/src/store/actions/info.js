import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_INFO } from '../actionTypes'; //REMOVE_READING

export const loadInfo = info => ({
    type: LOAD_INFO,
    info
});

export const fetchInfo = () => {
    return dispatch => {
        return apiCall('get', '/articles/find/info')
            .then(res => {
                console.log(res);
                dispatch(loadInfo(res));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    }
}