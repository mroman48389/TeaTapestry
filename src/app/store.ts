/* Single source of truth for global state. */
import { configureStore } from '@reduxjs/toolkit';

/* Create a store instance. */
export const store = configureStore({
  reducer: {},
});

/* Types for later use with hooks */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;