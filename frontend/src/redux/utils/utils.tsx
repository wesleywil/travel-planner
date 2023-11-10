import { createSlice } from "@reduxjs/toolkit";

export interface UtilState {
  hideFormPlan: boolean;
  hideProfileForm: boolean;
  hidePlanDetails: boolean;
  hideTodoDetails: boolean;
  hideTodoForm: boolean;
  hidePlanSharing: boolean;
}

const initialState: UtilState = {
  hideFormPlan: true,
  hideProfileForm: true,
  hidePlanDetails: true,
  hideTodoDetails: true,
  hideTodoForm: true,
  hidePlanSharing: true,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    switchFormHidden: (state) => {
      state.hideFormPlan = !state.hideFormPlan;
    },
    switchProfileFormHidden: (state) => {
      state.hideProfileForm = !state.hideProfileForm;
    },
    switchPlanDetailsHidden: (state) => {
      state.hidePlanDetails = !state.hidePlanDetails;
    },
    switchTodoDetailsHidden: (state) => {
      state.hideTodoDetails = !state.hideTodoDetails;
    },
    switchTodoFormHidden: (state) => {
      state.hideTodoForm = !state.hideTodoForm;
    },
    switchPlanSharingHidden: (state) => {
      state.hidePlanSharing = !state.hidePlanSharing;
    },
  },
});

export const {
  switchFormHidden,
  switchProfileFormHidden,
  switchPlanDetailsHidden,
  switchTodoDetailsHidden,
  switchTodoFormHidden,
  switchPlanSharingHidden,
} = utilsSlice.actions;

export default utilsSlice.reducer;
