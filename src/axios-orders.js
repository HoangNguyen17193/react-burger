import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-391a6.firebaseio.com/'
});

export default instance;