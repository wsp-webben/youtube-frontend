import axios from 'axios';
import { apiKey, baseUrl } from '@/consts';

async function apiGetVideo(id) {
  return axios.get(`${baseUrl}/videos`, {
    params: {
      key: apiKey,
      part: 'snippet,statistics',
      id,
      relevanceLanguage: 'en',
    },
  });
}

export default async function getVideo(id) {
  return apiGetVideo(id)
    .then(res => res.data.items[0].snippet);
}
