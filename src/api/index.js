import axios from 'axios';

const url = 'https://mikelarson.herokuapp.com/projects';

export const fetchPosts = () => axios.get(url)