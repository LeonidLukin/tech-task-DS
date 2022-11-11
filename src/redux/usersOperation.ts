import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from './usersSlice';

const BASE_URL = 'https://636bd1aa7f47ef51e13b4541.mockapi.io/api';
axios.defaults.baseURL = `${BASE_URL}`;

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (page: number, { rejectWithValue }) => {
      try {
        return await axios.get(`/users?page=${page}&limit=20`).then(({ data }) => data as User[]);
    } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  
  export const addUser = createAsyncThunk(
    'users/addUser',
    async (newUser: User, { rejectWithValue }) => {
      try {
        return await axios.post('/users', newUser).then(({ data }) => data as User);
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );