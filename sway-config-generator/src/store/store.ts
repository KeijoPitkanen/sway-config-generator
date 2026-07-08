import { configureStore } from "@reduxjs/toolkit";
import parametersSlice from "./parametersSlice";

export const store = configureStore({
  reducer: {
    parameters: parametersSlice,
  },
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
