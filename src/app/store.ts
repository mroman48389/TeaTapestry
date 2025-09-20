// src/store.ts
import { configureStore } from '@reduxjs/toolkit';

// For now, no slices — just an empty reducer object
export const store = configureStore({
  reducer: {},
});

// Types for later use with hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;