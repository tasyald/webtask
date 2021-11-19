import axios from 'axios';

export const homeApiUrl = {
  subtitle: 'https://api.chucknorris.io/jokes/random',
  photos: 'https://jsonplaceholder.typicode.com/photos',
}

export function apiGetSubtitle() {
  return axios.get(homeApiUrl.subtitle);
}

export function apiGetPhotos() {
  return axios.get(homeApiUrl.photos);
}
