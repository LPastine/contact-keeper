// 1 - Import the types related to this context
import { SET_ALERT, REMOVE_ALERT } from '../types';

// 2 - Specify how we want to treat what we receive in each state
export default (state, action) => {
    switch(action.type) {
        case SET_ALERT:
            return [...state, action.payload];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.payload);
        default:
            return state;
    }
}