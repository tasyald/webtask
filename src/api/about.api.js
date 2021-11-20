import axios from 'axios';

export const aboutApiUrl = {
  about: 'https://swapi.dev/api/films/1/',
}

export function apiGetAboutInfo() {
  return axios.get(aboutApiUrl.about);
}
