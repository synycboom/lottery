import axios from 'axios';

const USER_PREFERENCE_API = 'https://44c1b7c8.ngrok.io/';

const httpRequest = axios.create({
  baseURL: USER_PREFERENCE_API,
  timeout: 7000,
});

export const addLottery = async () => {
  await httpRequest.post('/lottery/new');
};
