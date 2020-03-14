import { LOAD_READINGS, REMOVE_READING } from '../actionTypes';

const reading = (state=[], action) => {
    switch (action.type) {
        case LOAD_READINGS:
            return [...action.readings];
        default:
            return state;
    }
}

export default reading;