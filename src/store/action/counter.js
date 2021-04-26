import * as TYPES from '../types/Counter';

export const setCounter = (payload) => ({
    type: TYPES.SET_COUNTER,
    payload: payload,
});