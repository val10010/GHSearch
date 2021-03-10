import { parseError } from "../utils/errors";
import { innerInstance } from "API/api";
import axios from 'axios';

let cancelToken;
async function postSearchService(value) {
    if(value.trim().length === 0) return;

    if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Operation canceled due to new request.");
    }

    cancelToken = axios.CancelToken.source();

    try {
        const  data  = await innerInstance({
            method: 'POST',
            url: '/',
            data: JSON.stringify({
                value
            }),
            cancelToken: cancelToken.token
        });

        return data;
    } catch (e) {

    }
}

export default postSearchService;