import axios from 'axios'


const instance = axios.create({
    timeout: 31000,
    headers: {
        Accept: 'application/json'
    },
});

instance.interceptors.response.use(function (response) {
    return response
}, function (error) {
    if (error.response.status === 401) {
        console.log('error in request')
    }
});

export default instance