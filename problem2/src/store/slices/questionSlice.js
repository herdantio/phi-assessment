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
            state.questionList = [...Questions];
        },
        incrementQuestionCounter: (state) => {
            state.questionCounter += 1;
        },
        decrementQuestionCounter: (state) => {
            state.questionCounter -= 1;
        },
        setSelectedAnswer: (state, action) => {
            state.questionList[state.questionCounter].selectedAnswer = action.payload;
        }
    }
});

export const {loadQuestionList, incrementQuestionCounter, decrementQuestionCounter, setSelectedAnswer} = questionSlice.actions;
export default questionSlice.reducer;