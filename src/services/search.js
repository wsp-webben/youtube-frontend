import axios from 'axios';
import { apiKey, baseUrl } from '@/consts';

async function apiSearch(query) {
  return axios.get(`${baseUrl}/search`, {
    params: {
      key: apiKey,
      part: 'snippet',
      q: query,
      type: 'video',
      maxResults: 15,
      relevanceLanguage: 'en',
    },
  });
}

export default async function search(query) {
  return apiSearch(query)
    .then(res => res.data.items
      .map(data => ({
        id: data.id.videoId,
        title: data.snippet.title,
        desc: data.snippet.description,
        thumb: data.snippet.thumbnails.medium,
        channel: data.snippet.channelTitle,
      })));
}
