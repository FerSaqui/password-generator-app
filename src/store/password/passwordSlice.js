import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lengthPassword: 0,
    optionsForGenerate: {
        uppercaseLetters: true,
        lowercaseLetters: true,
        numbers: true,
        symbols: true
    },
    numberSelectedOptions: 4,
    newPasswords: []
}

export const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    onSetLengthPassword: (state, { payload }) => {
        state.lengthPassword = payload;
    },
    onSetSelectedOption: (state, { payload }) => {
        state.optionsForGenerate[payload.option] = payload.value;
    },
    onCalculateNumberSelectedOptions: (state) => {
        let counter = 0;
        for (const element of object) {
            if(element === true){
                counter++;
            }
        }
        state.numberSelectedOptions = counter;
    },
    onAddPassword: (state, { payload }) => {
        state.newPasswords.push(payload);
    },
    onClearPasswords: (state) => {
        state.newPasswords = [];
    }
  }
});

export const {
    onSetLengthPassword,
    onSetSelectedOption,
    onCalculateNumberSelectedOptions,
    onAddPassword,
    onClearPasswords
} = passwordSlice.actions;