import { createSlice } from '@reduxjs/toolkit';
import { addUser, fetchUsers } from './usersOperation';

export interface User {
    id: string, 
    firstName: string,
    lastName: string,
    email: string,
    city: string,
    phoneNumber: string,
};

interface UsersState {
    items: User[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    page: number,
    isLastPage: boolean,
};

const initialState = {
    items: [],
    loading: 'idle',
    page: 1,
    isLastPage: false,
  } as UsersState;
  
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = 'pending';
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.items = state.items.concat(action.payload);

            if (action.payload.length === 0 || action.payload.length < 20) {
                state.isLastPage = true;
            }
            state.page++;
            state.loading = 'succeeded';
          })
          .addCase(fetchUsers.rejected, (state) => {
            state.loading = 'failed';
          })
          .addCase(addUser.fulfilled, (state, action) => {
            state.items.push(action.payload);

            state.loading = 'succeeded';
          })
          .addCase(addUser.pending, (state) => {

            state.loading = 'pending';
          })
      },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;