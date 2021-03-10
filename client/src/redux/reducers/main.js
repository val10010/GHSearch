import {types} from "Constants/main";

const initialState = {
    items: [],
    totalCount: 0
}

export const main = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.SET_ITEMS:
            return {...state,  items: payload };
        case types.SET_TOTAL_COUNT:
            return {...state,  totalCount: payload };
        default:
            return state;
    }
};