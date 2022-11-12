import { createSlice } from '@reduxjs/toolkit';
import { addEmployee, fetchEmployees } from './EmployeesOperation';

export interface Employee {
    id: string, 
    firstName: string,
    lastName: string,
    email: string,
    city: string,
    phoneNumber: string,
};

interface EmployeesState {
    items: Employee[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    page: number,
    isLastPage: boolean,
};

const initialState = {
    items: [],
    loading: 'idle',
    page: 1,
    isLastPage: false,
  } as EmployeesState;
  
export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchEmployees.pending, (state) => {
            state.loading = 'pending';
        })
        .addCase(fetchEmployees.fulfilled, (state, action) => {
            action.payload.forEach((item) => {
              const index = state.items.findIndex(prevItem => prevItem.id === item.id);
              if (index === -1) {
                state.items.push(item);
              }
              state.items[index] = item;
            })

            if (action.payload.length === 0 || action.payload.length < 20) {
                state.isLastPage = true;
            }
            state.page++;
            state.loading = 'succeeded';
          })
          .addCase(fetchEmployees.rejected, (state) => {
            state.loading = 'failed';
          })
          .addCase(addEmployee.fulfilled, (state, action) => {
            state.items.push(action.payload);
            state.loading = 'succeeded';
          })
          .addCase(addEmployee.pending, (state) => {

            state.loading = 'pending';
          })
      },
});

export const {} = employeesSlice.actions;
export default employeesSlice.reducer;