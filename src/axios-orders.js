import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://burger-builder-964e4.firebaseio.com/',
});

export default instance;