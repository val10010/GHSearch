const axios = require('axios');

const ghInstance = axios.create({
    baseURL: 'https://api.github.com/',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
});


module.exports = {
 ghInstance
};