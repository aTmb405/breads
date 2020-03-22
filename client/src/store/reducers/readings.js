import { LOAD_READINGS, REMOVE_READING } from '../actionTypes'; //USER_READINGS

const reading = (state=[], action) => {
    switch (action.type) {
        case LOAD_READINGS:
            return [...action.readings];
        case REMOVE_READING:
            return state.filter(reading => reading.id !== action.id);
        // case USER_READING:
        //     return state.filter(reading => reading.user_id !== action.user_id);
        default:
            return state;
    }
}

export default reading;