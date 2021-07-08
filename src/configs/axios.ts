import axios from 'axios';
import { browserEnv } from './env';

export const mainApi = axios.create({
  baseURL: browserEnv.APP_API_URL,
});
