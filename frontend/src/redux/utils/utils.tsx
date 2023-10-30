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
  reducers: {
    switchFormHidden: (state) => {
      state.hideFormPlan = !state.hideFormPlan;
    },
  },
});

export const { switchFormHidden } = utilsSlice.actions;

export default utilsSlice.reducer;
