// import axios from 'axios';
// import { MethodType } from 'src/types';

// const apiClient = async (url: string, method?: MethodType, data?: any, params?: any) => {
//   try {
//     const headers = {
//       Authorization: `Bearer ${getToken()}`,
//     };

//     axios.defaults.baseURL = 'http://192.168.1.48:8081';
//     const response = await axios({ method, data, url, params, headers });

//     if (!response.data.success) {
//       return Promise.reject(response.data);
//     }
//     return Promise.resolve(response.data);
//   } catch (error: any) {
//     return Promise.reject(error.message);
//   }
// };

// const getToken = () => {
//   return localStorage.getItem('token');
// };

// export default apiClient;
import axios from 'axios';
import { MethodType } from 'src/types';

const apiClient = async (url: string, method?: MethodType, data?: any, params?: any, port?: number) => {
  try {
    const headers = {
      // Authorization: `Bearer ${getToken()}`,
    };

    axios.defaults.baseURL = `/api`;
    const response = await axios({ method, data, url, params, headers });

    if (!response.data.success) {
      return Promise.reject(response.data);
    }
    return Promise.resolve(response.data);
  } catch (error: any) {
    return Promise.reject(error.message);
  }
};

const getToken = () => {
  return localStorage.getItem('token');
};

export default apiClient;
