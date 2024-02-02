import axios from 'axios';

axios.defaults.baseURL = 'https://65b95a82b71048505a8ab881.mockapi.io/api';

//65b95a82b71048505a8ab881.mockapi.io/api/adverts
// api.js
export const getAdverts = async () => {
  const { data } = await axios.get(`/adverts`);
  console.log('data=', data);
  return data;
};

// export const getExercisesMuscles = async () => {
//   const { data } = await axios.get(`exercises/filters?filter=Muscles`);
//   return data;
// };

// export const getExercisesEquipment = async () => {
//   const { data } = await axios.get(`exercises/filters?filter=Equipment`);
//   return data;
// };

// export const getAllExercises = async (filter, category) => {
//   const { data } = await axios(`exercises/exercises`, {
//     params: { filter: `${filter}`, category: `${category}` },
//   });
//   return data;
// };
