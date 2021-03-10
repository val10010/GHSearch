import { innerInstance } from "API/api";
import axios from 'axios';

let cancelToken;
async function postSearchService(value, page) {
    if(value.trim().length === 0) return {success: false};

    if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Operation canceled due to new request.");
    }

    cancelToken = axios.CancelToken.source();

    try {
        const  {data}  = await innerInstance({
            method: 'POST',
            data: JSON.stringify({
                value,
                page
            }),
            cancelToken: cancelToken.token
        });

        return data;
    } catch (e) {
        return {
            success: false
        }
    }
}

export default postSearchService;