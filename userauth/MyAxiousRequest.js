// MyAxiosRequest.js

import axios from 'axios';

const BASE_URL = 'https://test_apis.clicknfeed.co.uk/api/auth';

export async function login(email, password, restId) {
  console.log("Im hereEE");
  const url = `${BASE_URL}/login`;
  const body = {
    email,
    password,
    rest_id: restId
  };console.log("Im hereEE");

  try {
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
}

export async function getLoggedInUser(accessToken) {
  const url = `${BASE_URL}/me`;

  try {
    const response = await axios.post(url, null, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to get logged in user');
  }
}

export async function refreshToken(refreshToken) {
  const url = `${BASE_URL}/refresh`;

  try {
    const response = await axios.post(url, null, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${refreshToken}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Token refresh failed');
  }
}

export async function logout(accessToken) {
  const url = `${BASE_URL}/logout`;

  try {
    const response = await axios.post(url, null, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Logout failed');
  }
}

// import axios from 'axios';

// export const myAxiosPostReq = async (data) => {
//   const res = await axios({
//     method: 'post',
//     url: 'https://test_apis.clicknfeed.co.uk/api/auth/login',
//     data: data,
//   });
//   return res;
// };




// import axios from "axios";

// export const myAxiosgetReq=async()=>
// {
//     const res=await axios({
//         method:'get',
//         url:'https://jsonplaceholder.typicode.com/posts'
//     }
//     );
//     return res;
// }
// export const myAxiosPostReq=async()=>
// {
//     const res=await axios({
//         method:'post',
//         url:'https://jsonplaceholder.typicode.com/posts',
//         data:data,
//     }
//     );
//     return res;
// }