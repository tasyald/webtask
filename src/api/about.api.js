import axios from 'axios';

export const aboutApiUrl = {
  about: 'https://swapi.dev/api/films/1/',
  about2: 'https://www.swapi.tech/api/films/1',
}

export function apiGetAboutInfo() {
  return axios.get(aboutApiUrl.about);
}

export function apiGetAboutInfoBackup() {
  return axios.get(aboutApiUrl.about2);
}
