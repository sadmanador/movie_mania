import { createSlice } from "@reduxjs/toolkit";

const initialPageNumber = 1;

const paginationsSlice = createSlice({
  name: "paginations",
  initialState: initialPageNumber,
  reducers: {
    increment: (state, action) => {
      state++;
    },
    decrement: (state, action) => {
      state--;
    },
  },
});

export default paginationsSlice.reducer;
export const { increment, decrement } = paginationsSlice.reducer;
