import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import postSearchService  from 'Services/postSearchService'
import { mainAction } from  'Actions/main';


export const useMain = () => {
    const dispatch = useDispatch();
    const {
        items,
        totalCount
    } = useSelector((state) => state.main);

    const getRepositoriesData = async (value, page) => {
        const response = await postSearchService(value, page);
        console.log(response);
        if(response.success) {
            dispatch(mainAction.setItems(response.data.items))
            dispatch(mainAction.setTotalCount(response.data.total_count))
        } else if(!response.success) {
            console.log(response.status);
        }
    };

    return {
        getRepositoriesData,
        items,
        totalCount
    }
};

