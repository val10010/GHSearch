import axios from 'axios';
const API_URL =  'https://api-gh-search.herokuapp.com';

// Default instance
const instance = axios.create({
    // baseURL: '',
    responseType: 'json'
});
instance.defaults.headers.post['Content-Type'] = 'application/json';

// Account instance
const innerInstance = axios.create({
    baseURL: API_URL,
    responseType: 'json'
});
innerInstance.defaults.headers.post['Content-Type'] = 'application/json';


export {
    instance,
    innerInstance
};
