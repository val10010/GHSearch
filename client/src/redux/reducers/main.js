import {types} from "Constants/main";

const initialState = {
    items: [],
}

export const main = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.UPDATE_ITEMS:
            console.log(payload);
            return {...state,  items: payload };

        default:
            return state;
    }
};