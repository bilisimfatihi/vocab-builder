import axios from 'axios';

const API_BASE_URL = "https://vocab-builder-backend.p.goit.global/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthHeader = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = '';
};