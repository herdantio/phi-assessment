import { useDispatch } from "react-redux";
import QuestionCard from "./components/QuestionCard";
import {loadQuestionList} from "./store/slices/questionSlice";
import "./App.css"

function App(params) {
  
  const dispatch = useDispatch();
  
  dispatch(loadQuestionList());  

  return (
    <div className="flex justify-center">
      <QuestionCard/>
    </div>
  )
}

export default App;
