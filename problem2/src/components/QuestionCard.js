import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {incrementQuestionCounter, decrementQuestionCounter} from "../store/slices/questionSlice";

function QuestionCard() {
    const dispatch = useDispatch();
    const questionCounter = useSelector(state => state.question.questionCounter);
    const questionList = useSelector(state => state.question.questionList);

    return (
        <div className="w-4/12 space-y-3">
            <div id="questionName">
                <h1 className="text-3xl">{questionList[questionCounter].questionName}</h1>
            </div>
            <div id="options" className="border-solid border-2 border-blue-200 rounded-lg p-5 space-y-5">
                {
                    questionList[questionCounter].options.map(option => 
                        (
                            <div key={option} className="flex items-center space-x-2">
                                <input type="checkbox" name="option" className="h-8 w-8" />
                                <span>{option}</span>
                            </div>
                        )
                    )
                }
            </div>
            <div id="controlButton" className="flex justify-end space-x-3 px-3">
                <button 
                    className={`bg-blue-500 px-5 py-1 ${questionCounter === 0 ? "invisible" : ''}`}
                    onClick={()=>dispatch(decrementQuestionCounter())}
                    >
                    Prev
                </button>
                <button 
                    className={`bg-blue-500 px-5 py-1 ${questionCounter === questionList.length-1 ? "invisible" : ''}`} 
                    onClick={()=>dispatch(incrementQuestionCounter())}
                    >
                    Next
                </button>
            </div>
        </div>
    )   
}

export default QuestionCard;