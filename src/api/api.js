// import axios from 'axios';

// axios.defaults.baseURL = 'https://65b95a82b71048505a8ab881.mockapi.io/api';

// export const getAdverts = async filters => {
//   const { rentalPrice, make } = filters;
//   let queryParams = '';
//   console.log('rentalPrice=', rentalPrice);
//   if (rentalPrice) {
//     queryParams += `?rentalPrice=${rentalPrice}`;
//   }

//   if (make) {
//     queryParams += queryParams ? `&make=${make}` : `?make=${make}`;
//   }

//   const url = `/adverts${queryParams}`;
//   console.log('Request URL:', url);

//   const { data } = await axios.get(url);
//   return data;
// };
import axios from 'axios';

axios.defaults.baseURL = 'https://65b95a82b71048505a8ab881.mockapi.io/api';

export const getAdverts = async page => {
  const url = new URL('/adverts', axios.defaults.baseURL);
  // const array = [9582, 9584, 9586, 9587];

  // url.searchParams.append('id', id);
  // url.searchParams.append('id', '9584');
  url.searchParams.append('page', page);
  url.searchParams.append('limit', 12);

  try {
    const { data } = await axios.get(url.toString());
    return data;
  } catch (error) {
    console.error('Failed to fetch adverts:', error.message);
    throw error;
  }
};

axios.defaults.baseURL = 'https://65b95a82b71048505a8ab881.mockapi.io/api';

export const getFavorites = async (page, id) => {
  const url = new URL('/adverts', axios.defaults.baseURL);
  // const array = [9582, 9584, 9586, 9587];

  // url.searchParams.append('id', id);
  // url.searchParams.append('id', '9584');
  // url.searchParams.append('page', page);

  url.searchParams.append('limit', 12);

  try {
    const { data } = await axios.get(url.toString());
    return data;
  } catch (error) {
    console.error('Failed to fetch adverts:', error.message);
    throw error;
  }
};
