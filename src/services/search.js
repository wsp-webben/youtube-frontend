import axios from 'axios';
import { apiKey, baseUrl } from '@/consts';

export default function showKittens() {
  axios.get(`${baseUrl}/search`, {
    params: {
      key: apiKey,
      part: 'snippet',
      q: 'kittens',
      type: 'video',
    },
  })
    .then(res => console.log('good:', res))
    .catch(rej => console.log('fail:', rej));
}
