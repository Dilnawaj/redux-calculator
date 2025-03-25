import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "./calculator";

const rootStore = configureStore({
  reducer: {
    calculator: calculatorSlice.reducer,
  },
});
export default rootStore;
