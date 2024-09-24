import { configureStore } from "@reduxjs/toolkit";
import { passwordSlice } from "./password/passwordSlice";

export const store = configureStore({
    reducer: {
        password: passwordSlice.reducer
    }
});