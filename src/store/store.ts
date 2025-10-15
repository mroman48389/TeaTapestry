import { configureStore } from "@reduxjs/toolkit";

import selectedPageReducer from "./selectedPageSlice";

export const store = configureStore({
    reducer: {
        selectedPage: selectedPageReducer,
        // other slices
    },
});

/* Entire Redux state tree for app. */
export type RootState = ReturnType<typeof store.getState>; // entire Redux state tree (app state)
export type AppDispatch = typeof store.dispatch;

console.log(typeof selectedPageReducer);