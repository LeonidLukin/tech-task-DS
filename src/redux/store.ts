import { configureStore } from '@reduxjs/toolkit';
import EmployeesSlice from './EmployeesSlice';

export const store = configureStore({
  reducer: {
    employees: EmployeesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;