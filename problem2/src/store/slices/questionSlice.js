import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
    name: "question",
    initialState: {
        text: "Hello world from questionSlice"
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        }
    }
});

export const {setText} = questionSlice.actions;
export default questionSlice.reducer;