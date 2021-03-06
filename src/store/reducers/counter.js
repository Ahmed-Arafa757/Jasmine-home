import * as TYPES from "../types/Counter";



export default (state = {
    counter: 0
}, action) => {
    switch (action.type) {
        case TYPES.SET_COUNTER:
            return {
                ...state,
                counter: action.payload,
            };
        default:
            return state;
    }
};
