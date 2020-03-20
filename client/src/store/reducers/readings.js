import { LOAD_READINGS } from '../actionTypes'; //REMOVE_READING

const reading = (state=[], action) => {
    switch (action.type) {
        case LOAD_READINGS:
            return [...action.readings];
        default:
            return state;
    }
}

export default reading;