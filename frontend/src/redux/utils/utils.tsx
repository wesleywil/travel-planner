import { createSlice } from "@reduxjs/toolkit";

export interface UtilState {
  hideFormPlan: boolean;
}

const initialState: UtilState = {
  hideFormPlan: true,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {},
});

export const {} = utilsSlice.actions;

export default utilsSlice.reducer;
