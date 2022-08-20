import axios from 'axios';

const url = 'http://;pca;host:5000/posts';

export const fetchPosts = () => axios.get(url)