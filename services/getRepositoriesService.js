const {ghInstance} =  require('../api/ghInstance');
const axios = require('axios');

let cancelToken;
async function getRepositoriesService (res, config, value) {
    if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Operation canceled due to new request.");
    }
    cancelToken = axios.CancelToken.source();
    try {
        const result  = await ghInstance({
            method: 'GET',
            url: `https://api.github.com/search/repositories?q=${value}+in:name&sort=stars&order=desc}`,
            cancelToken: cancelToken.token
        });
        return  { data: result.data, status: result.status };
    } catch (e) {
        return { data: [], status: result.status || 500 }
    }
}

module.exports = {
    getRepositoriesService
};