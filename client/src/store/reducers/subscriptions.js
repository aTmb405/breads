import { LOAD_SUBSCRIPTIONS } from '../actionTypes';

const subscription = (state=[], action) => {
    switch (action.type) {
        case LOAD_SUBSCRIPTIONS:
            return [...action.subscriptions];
        default:
            return state;
    }
}

export default subscription;