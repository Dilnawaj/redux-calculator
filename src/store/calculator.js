import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    calculatorValue: 0,
  },
  reducers: {
    add: (state, action) => {
      state.calculatorValue =
        Number(action.payload.first) + Number(action.payload.second);
    },
    subtract: (state, action) => {
      state.calculatorValue =
        Number(action.payload.first) - Number(action.payload.second);
    },
    multiply: (state, action) => {
      state.calculatorValue =
        Number(action.payload.first) * Number(action.payload.second);
    },
    divide: (state, action) => {
      state.calculatorValue =
        Number(action.payload.first) / Number(action.payload.second);
    },
  },
});
export const calculatorAction = calculatorSlice.actions;
export default calculatorSlice;
