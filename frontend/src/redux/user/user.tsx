import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "@/utils/interfaces";
import { headers } from "../plans/plans";

export interface UserState {
  user: User;
  status: string;
  error: string;
}

const initialState: UserState = {
  user: {} as User,
  status: "idle",
  error: "",
};

const url = "http://localhost:8000/api/";

export const retrieveUser = createAsyncThunk("user/retrieveUser", async () => {
  const res = await fetch(`${url}retrieveUser/?format=json`, {
    headers: headers,
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }
  const user: User = await res.json();
  return user;
});

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ username, password }: { username: string; password: string }) => {
    const res = await fetch(`${url}login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    return data;
  }
);

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({
    username,
    email,
    password,
    confirmPassword,
  }: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    const res = await fetch(`${url}register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, confirmPassword }),
    });
    const data = await res.json();
    return data;
  }
);

export const signOut = createAsyncThunk("user/signOut", async () => {
  const res = await fetch(`${url}logout/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retrieveUser.pending, (state) => {
        state.status = "trying to retrieve user info";
      })
      .addCase(retrieveUser.fulfilled, (state, { payload }) => {
        state.status = "user info retrieved";
        state.user = payload;
      })
      .addCase(retrieveUser.rejected, (state, { payload }) => {
        state.status = "user info failed to be retrieved";
        state.error = String(payload);
      })
      .addCase(signIn.pending, (state) => {
        state.status = "trying to signIn";
      })
      .addCase(signIn.fulfilled, (state) => {
        state.status = "successfully signed user";
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.status = "sign in failed";
        state.error = String(payload);
      })
      .addCase(signUp.pending, (state) => {
        state.status = "trying to signUp";
      })
      .addCase(signUp.fulfilled, (state) => {
        state.status = "user successfully registered";
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.status = "failed to register user";
        state.error = String(payload);
      })
      .addCase(signOut.pending, (state) => {
        state.status = "trying to signOut";
      })
      .addCase(signOut.fulfilled, (state) => {
        state.status = "user was logged out";
      })
      .addCase(signOut.rejected, (state, { payload }) => {
        state.status = "failed to logged Out user";
        state.error = String(payload);
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
