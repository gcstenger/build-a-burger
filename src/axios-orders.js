import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-build-a-burger-54f60.firebaseio.com/'
});

export default instance;