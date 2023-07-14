import axios from 'axios';

const inctance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setAuthHeader = token => {
  inctance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  inctance.defaults.headers.common.Authorization = '';
};
export const registers = async user => {
  const { data } = await inctance.post('/users/signup', user);
  setAuthHeader(data.token);
  return data;
};

export const Login = async user => {
  const { data } = await inctance.post('/users/login', user);
  setAuthHeader(data.token);
  return data;
};

export const Logout = async () => {
  await inctance.post('/users/logout');
  clearAuthHeader();
};

export const refresh = async () => {
  const { data } = await inctance.get('/users​/current');
  return data;
};

// Contact \\
export const fetchContacts = async () => {
  const { data } = await inctance.get('/contacts');
  return data;
};

export const addContactss = async contacts => {
  const { data } = await inctance.post('/contacts', contacts);
  return data;
};

export const deleteContact = async id => {
  await inctance.delete(`/contacts/${id}`);
};
