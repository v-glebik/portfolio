import axios from 'axios';

import { store } from '../../index';

const URL = 'https://manicureapp.com';

const fieldsGetSalon = 'fields=id,name,date_joined,date_updated';

const endpoints = {
  auth: `${URL}/login/`,
  authOut: `${URL}/logout/`,
  postSalon: `${URL}/salon/`,
  getUser: (page, size) => `${URL}/users/?page=${page}&page_size=${size}`,
  getSalons: (page, size) => `${URL}/salon/?page=${page}&page_size=${size}`,
  getSalon: id => `${URL}/salon/${id}`
};

// get and set localStorage
export const stateLocalStorage = token => (
  token ? localStorage.setItem('auth', token) : localStorage.getItem('auth')
);

export const removeLocalStorage = () => {
  const token = stateLocalStorage();
  if (token) {
    localStorage.removeItem('auth');
  }
};

export const axiosInstance = axios.create({ headers: { 'Content-Type': 'application/json' } });

axiosInstance.interceptors.response.use(
  response => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 || error.response.status === 400) {
      // store.dispatch({ type: 'UNAUTHENTICATED' });
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.request.use(
  (config) => {
    const token = stateLocalStorage();
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = token ? `Token ${token}` : '';
    return config;
  },
  (error) => {
    store.dispatch({ type: 'REQUEST_ERROR' });
    return Promise.reject(error);
  }
);
// check username and password => login
export const getAuthToken = async (username, password) => {
  const res = await axiosInstance.post(endpoints.auth, { username, password });
  return res.data.token;
};
// logout
export const sendAuthToken = async () => {
  const res = await axiosInstance.get(endpoints.authOut);
  return res.data;
};
// get user list
export const fetchUser = async (page, size) => {
  const res = await axiosInstance.get(endpoints.getUser(page, size));
  return res;
};
// get salon list
export const fetchSalons = async (page, size) => {
  const res = await axiosInstance.get(endpoints.getSalons(page, size));
  return res;
};

export const fetchSalon = async (id) => {
  const res = await axiosInstance.get(endpoints.getSalon(id));
  return res;
};

export const addSalon = async (values) => {
  const res = await axiosInstance.post(endpoints.postSalon, values);
  return res;
};
