import { createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: [],
  reducers: {
    addQuiz: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;
