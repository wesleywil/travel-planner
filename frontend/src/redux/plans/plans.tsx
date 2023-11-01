import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Plans } from "@/utils/interfaces";

export interface PlanState {
  plan: Plans;
  plans: Plans[];
  status: string;
  error: string;
}

const initialState: PlanState = {
  plan: {} as Plans,
  plans: [],
  status: "idle",
  error: "",
};

const url = "http://localhost:8000/api/plans/";

export const headers = {
  "Content-Type": "application/json",
  Authorization: `Token ${
    typeof localStorage !== "undefined" ? localStorage.getItem("token") : ""
  }`,
};

export const fetchPlans = createAsyncThunk("plans/fetchPlans", async () => {
  const res = await fetch(url, {
    method: "GET",
    headers: headers,
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch topics");
  }
  const plans: Plans[] = await res.json();
  return plans;
});

export const fetchPlanById = createAsyncThunk(
  "plans/fetchPlanById",
  async (id: number) => {
    const res = await fetch(`${url}/${id}/`, {
      method: "GET",
      headers: headers,
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    const plan: Plans = await res.json();
    return plan;
  }
);

export const createPlan = createAsyncThunk(
  "plans/createPlan",
  async (data: Plans) => {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: headers,
      credentials: "include",
    });
    return res.json();
  }
);

export const updatePlan = createAsyncThunk(
  "plans/updatePlan",
  async ({ id, data }: { id: number; data: Plans }) => {
    const res = await fetch(`${url}${id}/`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: headers,
      credentials: "include",
    });
    return res.json();
  }
);

export const deletePlan = createAsyncThunk(
  "plans/deletePlan",
  async (id: number) => {
    await fetch(`${url}${id}/`, {
      method: "DELETE",
      headers: headers,
      credentials: "include",
    });
    return id;
  }
);

export const planSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    selectPlan: (state, action: PayloadAction<number>) => {
      const selectedPlan = state.plans.find(
        (item) => item.id === action.payload
      );
      state.plan = selectedPlan !== undefined ? selectedPlan : ({} as Plans);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlans.pending, (state) => {
        state.status = "trying to fetch plans";
      })
      .addCase(fetchPlans.fulfilled, (state, { payload }) => {
        state.status = "plans fetched";
        state.plans = payload;
      })
      .addCase(fetchPlans.rejected, (state, { payload }) => {
        state.status = "failed to fetch the plans";
        state.error = JSON.stringify(payload);
      })
      .addCase(fetchPlanById.pending, (state) => {
        state.status = "selecting plan by id";
      })
      .addCase(fetchPlanById.fulfilled, (state, { payload }) => {
        state.status = "plan selected";
        state.plan = payload;
      })
      .addCase(fetchPlanById.rejected, (state, { payload }) => {
        state.status = "failed to select plan by id";
        state.error = JSON.stringify(payload);
      })
      .addCase(createPlan.pending, (state) => {
        state.status = "creating a new plan";
      })
      .addCase(createPlan.fulfilled, (state) => {
        state.status = "plan created";
      })
      .addCase(createPlan.rejected, (state, { payload }) => {
        state.status = "failed to create a new plan";
        state.error = JSON.stringify(payload);
      })
      .addCase(updatePlan.pending, (state) => {
        state.status = "updating plan";
      })
      .addCase(updatePlan.fulfilled, (state) => {
        state.status = "plan updated";
      })
      .addCase(updatePlan.rejected, (state, { payload }) => {
        state.status = "failed to update plan";
        state.error = JSON.stringify(payload);
      })
      .addCase(deletePlan.pending, (state) => {
        state.status = "deleting plan";
      })
      .addCase(deletePlan.fulfilled, (state) => {
        state.status = "plan deleted";
      })
      .addCase(deletePlan.rejected, (state, { payload }) => {
        state.status = "failed to delete plan";
        state.error = JSON.stringify(payload);
      });
  },
});

export const { selectPlan } = planSlice.actions;

export default planSlice.reducer;
