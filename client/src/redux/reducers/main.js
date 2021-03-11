import {types} from "Constants/main";
import {assign} from "Utils/common";

const initialState = {
    items: [],
    totalCount: 0,
    cache: {}
};

export const main = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.SET_ITEMS:
            return {...state,  items: payload };
        case types.SET_TOTAL_COUNT:
            return {...state,  totalCount: payload };
        case types.UPDATE_CACHE:
            const key = Object.keys(payload)[0];
            if(key in state.cache) {
                return {...state,  cache: {...state.cache, ...{[key]: {...state.cache[key], ...payload[key]}}}}
            } else {
                return {...state,  cache: {...state.cache, ...payload}};
            }
        default:
            return state;
    }
};