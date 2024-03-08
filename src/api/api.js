import axios from 'axios';

axios.defaults.baseURL = 'https://65b95a82b71048505a8ab881.mockapi.io/api';

export const getAdverts = async (page, make) => {
  const url = new URL('/adverts', axios.defaults.baseURL);
  if (page) {
    url.searchParams.append('page', page);
  }
  url.searchParams.append('limit', 12);
  if (make) {
    url.searchParams.append('make', make);
  }

  try {
    const { data } = await axios.get(url.toString());

    return data;
  } catch (error) {
    console.error('Failed to fetch adverts:', error.message);
    throw error;
  }
};

export const getFavorites = async page => {
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

export const getAutos = async (page, make) => {
  const url = new URL('/adverts', axios.defaults.baseURL);

  if (page) {
    url.searchParams.append('page', page);
  }

  if (make) {
    url.searchParams.append('make', make);
  }

  try {
    const { data } = await axios.get(url.toString());

    return data;
  } catch (error) {
    console.error('Failed to fetch adverts:', error.message);
    throw error;
  }
};

export const getAutosFavorites = async () => {
  const url = new URL('/adverts', axios.defaults.baseURL);

  // if (page) {
  //   url.searchParams.append('page', page);
  // }
  // url.searchParams.append('page', page);
  // url.searchParams.append('limit', 12);
  // if (make) {
  //   url.searchParams.append('make', make);
  // }

  try {
    const { data } = await axios.get(url.toString());

    return data;
  } catch (error) {
    console.error('Failed to fetch adverts:', error.message);
    throw error;
  }
};
