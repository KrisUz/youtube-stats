import axios from 'axios'

const KEY = 'API KEY'; /*<--replace with your Youtube API Key*/

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet, statistics',
        key: KEY
    }
});