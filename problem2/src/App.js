import { useSelector } from "react-redux";


function App(params) {
  const text = useSelector(state => state.problem.text);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default App;
