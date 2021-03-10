const axios = require('axios');

// Default instance
const instance = axios.create({
    responseType: 'json'
});


module.exports = {
    instance
};