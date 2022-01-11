import { createSlice } from "@reduxjs/toolkit";
import Questions from "../../question-bank/questions.json";

export const questionSlice = createSlice({
    name: "question",
    initialState: {
        questionList: [],
        questionCounter: 0
    },
    reducers: {
        loadQuestionList: (state, action) => {
            state.questionList = Questions;
        },
        incrementQuestionCounter: (state, action) => {
            state.questionCounter += 1;
        },
        decrementQuestionCounter: (state, action) => {
            state.questionCounter -= 1;
        }
    }
});

export const {loadQuestionList, incrementQuestionCounter, decrementQuestionCounter} = questionSlice.actions;
export default questionSlice.reducer;