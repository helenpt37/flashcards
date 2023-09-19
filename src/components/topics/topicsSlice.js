import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: [],
  reducers: {
    addTopic: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
