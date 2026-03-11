import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setAuthHeader, clearAuthHeader } from "../../services/api";

// Kayıt İşlemi (Register)
export const register = createAsyncThunk(
  'auth/register',
  async (credentials: { name: string; email: string; password: string }, thunkAPI) => {
    try {
      const res = await api.post('/users/signup', credentials);
      // Başarılı kayıtta token'ı Axios'a tanıtıyoruz [cite: 44]
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// Giriş İşlemi (Login)
export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const res = await api.post('/users/signin', credentials);
      setAuthHeader(res.data.token); // [cite: 54]
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);