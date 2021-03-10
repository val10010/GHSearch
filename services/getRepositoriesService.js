const {ghInstance} =  require('../api/ghInstance');
const axios = require('axios');

let cancelToken;
async function getRepositoriesService (value, page) {
    if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Operation canceled due to new request.");
    }
    cancelToken = axios.CancelToken.source();
    try {
        const result  = await ghInstance({
            method: 'GET',
            url: `search/repositories?q=${value}+in:name&sort=stars&order=desc&page=${page}`,
            cancelToken: cancelToken.token
        });
        return  result;
    } catch (e) {
        return { data: [], status: result.status || 500 }
    }
}

module.exports = {
    getRepositoriesService
};