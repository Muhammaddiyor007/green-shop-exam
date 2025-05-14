// src/services/auth.js
import axios from 'axios';

const API = 'https://dummyjson.com/auth';

export const signUp = (data) =>
  axios.post(`${API}/register`, data);

export const signIn = (data) =>
  axios.post(`${API}/login`, data);
