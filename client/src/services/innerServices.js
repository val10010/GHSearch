import { parseError } from "../utils/errors";
import { innerInstance } from "./api";

export async function postSearchService(requestData) {
    try {
        const { data } = await innerInstance({
            method: 'POST',
            url: '/',
            data: requestData
        });

        return data;
    } catch (e) {
        throw parseError(e);
    }
}
