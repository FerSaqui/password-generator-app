import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoadingPasswords: false
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    onInitLoadingPasswords: (state) => {
        state.isLoadingPasswords = true;
    },
    onFinishLoadingPasswords: (state) => {
        state.isLoadingPasswords = false;
    }
  }
});

export const { onInitLoadingPasswords, onFinishLoadingPasswords } = uiSlice.actions;