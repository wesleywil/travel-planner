import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./plans/plans";
import todoReducer from "./todos/todos";
import utilsReducer from "./utils/utils";

export const store = configureStore({
    reducer:{
        utils:utilsReducer,
        plans:planReducer,
        todos:todoReducer,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;