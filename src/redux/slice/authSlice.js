// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'counter',
  initialState: {
    name: undefined,
    email: undefined,
    p_id: undefined,
    role: undefined
    
  },
  reducers: {
    saveProfile: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.p_id=  action.payload.p_id
      state.role=  action.payload.role

    },
    clearProfile: (state) => {
      state = {
        name: undefined,
        email: undefined,
        p_id: undefined,
        role: undefined
      }
    },
  },
});

export const { saveProfile, clearProfile } = authSlice.actions;
export default authSlice.reducer;
