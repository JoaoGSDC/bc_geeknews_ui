import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://geeknews-api.herokuapp.com',
});
