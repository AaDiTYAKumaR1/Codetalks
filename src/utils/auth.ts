// utils/auth.ts

import Cookies from 'js-cookie';

export const getToken = () => {
  return Cookies.get('token');
};
console.log(getToken());

// export const isAuthenticated = () => {
//   const token = getToken();
//   return token !== undefined;
// };
