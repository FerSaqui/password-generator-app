import { configureStore } from "@reduxjs/toolkit";
import { passwordSlice } from "./password/passwordSlice";
import { uiSlice } from "./ui/uiSlice";

export const store = configureStore({
    reducer: {
        password: passwordSlice.reducer,
        ui: uiSlice.reducer
    }
});