import axios from 'axios';

axios.defaults.baseURL = 'https://65b95a82b71048505a8ab881.mockapi.io/api';

export const getAdverts = async (page, filter) => {
  const url = new URL('/adverts', axios.defaults.baseURL);

  url.searchParams.append('page', page);
  url.searchParams.append('limit', 12);
  if (filter) {
    url.searchParams.append('filter', filter);
  }

  try {
    const { data } = await axios.get(url.toString());
    return data;
  } catch (error) {
    console.error('Failed to fetch adverts:', error.message);
    throw error;
  }
};

// export const getFavorites = async () => {
//   const { data } = await axios.get(`/adverts`);
//   console.log('data=', data);
//   return data;
// };

export const getFavorites = async (page, id) => {
  const url = new URL('/adverts', axios.defaults.baseURL);

  url.searchParams.append('limit', 12);

  try {
    const { data } = await axios.get(url.toString());
    return data;
  } catch (error) {
    console.error('Failed to fetch adverts:', error.message);
    throw error;
  }
};
