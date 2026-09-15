import api from './api';

export async function getDestinations() {
  const response = await api.get('/destinations');

  return response.data;
}
