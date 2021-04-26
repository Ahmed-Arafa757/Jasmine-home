import * as TYPES from '../types/product';

export const sendProduct = (payload) => ({
    type: TYPES.SEND_PRODUCT,
    payload: payload,
});