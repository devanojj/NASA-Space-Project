import axios from 'axios';

export async function fetchApod(date) {
  const resp = await axios.get('https://api.nasa.gov/planetary/apod', {
    params: {
      api_key: process.env.NASA_API_KEY,
      date,
    },
  });
  return resp.data;
}