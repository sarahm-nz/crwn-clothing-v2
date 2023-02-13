import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

export const userReducer = (state = INITIAL_STATE, action) => {    
    const {type, payload} = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state, // spread through the previous state
                currentUser: payload // then return the new value that you care about
            }
        default:
            return state;
    }
}