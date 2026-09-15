import api from './api';

export async function searchHotels(searchData) {
  const response = await api.post('/hotels/search', searchData);

  return response.data;
}
