import { configureStore } from "@reduxjs/toolkit";
import problemSlice from "./modules/problemSlice";

export default configureStore({
    reducer: {
        problem: problemSlice
    }
});