import * as TYPES from "../types/product";



export default (state = {
    product:{}
}, action) => {
    switch (action.type) {
        case TYPES.SEND_PRODUCT:
            return {
                ...state,
                product: action.payload,
            };
        default:
            return state;
    }
};
