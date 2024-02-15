import { configureStore } from "@reduxjs/toolkit";
import allureSlice from "./slice/allureSlice";

export const store = configureStore({
    reducer:{
        allure: allureSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch