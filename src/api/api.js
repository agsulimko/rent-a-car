import axios from 'axios';

axios.defaults.baseURL = 'https://65b95a82b71048505a8ab881.mockapi.io/api';

export const getAdverts = async filters => {
  const { rentalPrice, make } = filters;
  let queryParams = '';
  console.log('rentalPrice=', rentalPrice);
  if (rentalPrice) {
    queryParams += `?rentalPrice=${rentalPrice}`;
  }

  if (make) {
    queryParams += queryParams ? `&make=${make}` : `?make=${make}`;
  }

  // if (mileageFrom) {
  //   queryParams += queryParams
  //     ? `&mileageFrom=${mileageFrom}`
  //     : `?mileageFrom=${mileageFrom}`;
  // }

  // if (mileageTo) {
  //   queryParams += queryParams
  //     ? `&mileageTo=${mileageTo}`
  //     : `?mileageTo=${mileageTo}`;
  // }

  const url = `/adverts${queryParams}`;
  console.log('Request URL:', url);

  const { data } = await axios.get(url);
  return data;
};
