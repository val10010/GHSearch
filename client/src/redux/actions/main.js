import {types} from "Constants/main";

export const mainAction = Object.freeze({
    setItems: (payload) => {
        return {
            type: types.SET_ITEMS,
            payload,
        }
    },
    setTotalCount: (payload) => {
        return {
            type: types.SET_TOTAL_COUNT,
            payload,
        }
    },
    updateCache: (payload) => {
        return {
            type: types.UPDATE_CACHE,
            payload,
        }
    }
});
