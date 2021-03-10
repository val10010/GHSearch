import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import postSearchService  from 'Services/postSearchService'
import { mainAction } from  'Actions/main';


export const useMain = () => {
    const dispatch = useDispatch();
    const {
        items
    } = useSelector((state) => state.main);

    const getRepositoriesData = async (value, page) => {
        const response = await postSearchService(value);

        if(response.success) {
            dispatch(mainAction.updateItems(response.data.items))
        } else if(!response.success) {
            console.log(response.status);
        }
    };

    return {
        getRepositoriesData,
        items
    }
};

