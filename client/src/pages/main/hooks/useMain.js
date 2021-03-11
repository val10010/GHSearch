import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import postSearchService  from 'Services/postSearchService'
import { mainAction } from  'Actions/main';


export const useMain = () => {
    const dispatch = useDispatch();
    const {
        items,
        totalCount,
        cache
    } = useSelector((state) => state.main);

    const searchInCache = (value, page) => {
        return cache[value] && cache[value][page] || false;
    };

    const getRepositoriesData = async (value, page) => {
        const cached = searchInCache(value, page);
        if(cached) {
            dispatch(mainAction.setItems(cache[value][page]));
            dispatch(mainAction.setTotalCount(cache[value].totalCount));
        } else {
            const response = await postSearchService(value, page);
            if(response.success) {
                dispatch(mainAction.setItems(response.data.items))
                dispatch(mainAction.setTotalCount(response.data.total_count));
                dispatch(mainAction.updateCache({
                    [value]: {[page]: response.data.items,
                    totalCount: response.data.total_count
                }}))
            } else if(!response.success) {
                console.log(response.status);
            }
        }

    };

    return {
        getRepositoriesData,
        items,
        totalCount
    }
};

