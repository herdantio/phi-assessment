import { createSlice } from "@reduxjs/toolkit";

export const problemSlice = createSlice({
    name: "problem",
    initialState: {
        text: "Hello world from problemSlice"
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        }
    }
});

export const {setText} = problemSlice.actions;
export default problemSlice.reducer;