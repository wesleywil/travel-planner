import { createSlice } from "@reduxjs/toolkit";

export interface UtilState {
  hideFormPlan: boolean;
  hidePlanDetails: boolean;
}

const initialState: UtilState = {
  hideFormPlan: true,
  hidePlanDetails: true,
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
  },
});

export const { switchFormHidden, switchPlanDetailsHidden } = utilsSlice.actions;

export default utilsSlice.reducer;
