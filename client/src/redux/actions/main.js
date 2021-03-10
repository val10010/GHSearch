import {types} from "Constants/main";

export const mainAction = Object.freeze({
    updateItems: (payload) => {
        return {
            type: types.UPDATE_ITEMS,
            payload,
        }
    }
});
