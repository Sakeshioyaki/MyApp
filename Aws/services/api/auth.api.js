// export async function apiSignin(email, password) {
//     fetch('https://reactnative.dev/movies.json')
//     .then((response) => response.json())
//     .then((json) => {
//       return json.movies;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   const response = await Api.post('/signin', {
//     email,
//     password,
//   }).catch(error => error);
//   return response.data;
// }

export const apiSignin = async (email, password) => {
  try {
    const response = await fetch('https://1.0.0.1:8001/login');
    const json = await response.json();
    return json.body;
  } catch (error) {
    console.error(error);
  }
};
