import { createSlice } from "@reduxjs/toolkit";

export interface UtilState {
  hideFormPlan: boolean;
  hidePlanDetails: boolean;
  hideTodoDetails: boolean;
}

const initialState: UtilState = {
  hideFormPlan: true,
  hidePlanDetails: true,
  hideTodoDetails: true,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    switchFormHidden: (state) => {
      state.hideFormPlan = !state.hideFormPlan;
    },
    switchPlanDetailsHidden: (state) => {
      state.hidePlanDetails = !state.hidePlanDetails;
    },
    switchTodoDetailsHidden: (state) => {
      state.hideTodoDetails = !state.hideTodoDetails;
    },
  },
});

export const {
  switchFormHidden,
  switchPlanDetailsHidden,
  switchTodoDetailsHidden,
} = utilsSlice.actions;

export default utilsSlice.reducer;
