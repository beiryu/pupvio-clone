import { AppStore } from '@/lib/store';
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null },
  reducers: {
    setUserState: (state, action) => {
      state.user = action.payload;
    },
    resetUserState: (state) => {
      state.user = null;
    },
  },
});

export const { setUserState, resetUserState } = userSlice.actions;

export const selectUser = (state: ReturnType<AppStore['getState']>) =>
  state.user.user;

export default userSlice.reducer;
