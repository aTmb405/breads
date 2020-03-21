import { LOAD_INFO } from '../actionTypes'; //REMOVE_READING

const reading = (state=[], action) => {
    switch (action.type) {
        case LOAD_INFO:
            return [...action.info];
        default:
            return state;
    }
}

export default reading;