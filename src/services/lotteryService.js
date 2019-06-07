import axios from 'axios';

const USER_PREFERENCE_API = 'https://cd1e18c4.ngrok.io/';

const httpRequest = axios.create({
  baseURL: USER_PREFERENCE_API,
  timeout: 7000,
});

export const addLottery = async () => {
  await httpRequest.post('/lottery/new');
};

export const getInventory = async () => {
  const { data: { data } } = await httpRequest.get('/lottery');

  return data;
};
