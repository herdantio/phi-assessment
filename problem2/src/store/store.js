import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./slices/questionSlice";

export default configureStore({
    reducer: {
        question: questionSlice
    }
});