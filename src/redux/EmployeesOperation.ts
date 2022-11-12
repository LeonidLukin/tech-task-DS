import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Employee } from './EmployeesSlice';

const BASE_URL = 'https://636bd1aa7f47ef51e13b4541.mockapi.io/api';
axios.defaults.baseURL = `${BASE_URL}`;

export const fetchEmployees = createAsyncThunk(
    'employees/fetchEmployees',
    async (page: number, { rejectWithValue }) => {
      try {
        return await axios.get(`/employees?page=${page}&limit=20&sortBy=date`).then(({ data }) => data as Employee[]);
    } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  
  export const addEmployee = createAsyncThunk(
    'employees/addEmployee',
    async (newEmployee: Employee, { rejectWithValue }) => {
      try {
        return await axios.post('/employees', newEmployee).then(({ data }) => data as Employee);
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );