import axios from 'axios'

const KEY = 'AIzaSyAxIKJXg30vP21zeA_myJWtH9ctNDSPRPI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet, statistics',
        key: KEY
    }
});