import { createSlice } from "@reduxjs/toolkit";

const fliterSlice = createSlice({
  name: "filter",
  initialState: {},
  reducers: {
    storeFilterData: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { storeFilterData } = fliterSlice.actions;
export default fliterSlice.reducer;
