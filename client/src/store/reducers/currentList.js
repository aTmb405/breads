import { GLOBAL_LIST, USER_LIST } from '../actionTypes';

const currentList = (state = { list: 'global' }, action) => {
    switch (action.type) {
        case GLOBAL_LIST:
            return {...state, list: 'global'};
        case USER_LIST:
            return {...state, list: 'user'};
        default:
            return state;
    }
}

export default currentList;