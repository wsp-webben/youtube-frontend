import axios from 'axios';
import { apiKey, baseUrl } from '@/consts';

export default async function search(query) {
  return axios.get(`${baseUrl}/search`, {
    params: {
      key: apiKey,
      part: 'snippet',
      q: query,
      type: 'video',
      maxResults: 10,
      relevanceLanguage: 'en',
    },
  })
    .then(res => res.data.items
      .map(data => ({
        id: data.id.videoId,
        title: data.snippet.title,
        desc: data.snippet.description,
        thumb: data.snippet.thumbnails.default,
        channel: data.snippet.channelTitle,
      })));
}
