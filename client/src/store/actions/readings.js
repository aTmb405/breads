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

const postReadings = () => {

}