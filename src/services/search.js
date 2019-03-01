import axios from 'axios';
import { apiKey, baseUrl } from '@/consts';

export default async function search(query) {
  return axios.get(`${baseUrl}/search`, {
    params: {
      key: apiKey,
      part: 'snippet',
      q: query,
      type: 'video',
      maxResults: 5,
      relevanceLanguage: 'en',
    },
  })
    .then(res => res.data.items);
}
