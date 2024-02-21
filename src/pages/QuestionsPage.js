import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer,reset } from "../reducers/userQuestionsSlice";

import "../App.css";
import { useNavigate } from "react-router-dom";

export default function QuestionsPage() {
  
  const dispatch = useDispatch();
  const [selectedChoice, setSelectedChoice] = useState("");
  let currentChoiceIndex = useRef('');
  const navigate = useNavigate();

  const { currentQuestionIndex, questions, userAnswers } = useSelector(
    (state) => state.choices
  );

  useEffect(()=>{
    dispatch(reset());
  },[]);

  function SubmitAnswer() {
    console.log(currentChoiceIndex.current);
    if (currentChoiceIndex.current == "") return;
    let userAnswer={
        ...questions[currentQuestionIndex],
        correctAnswer:questions[currentQuestionIndex].choices[questions[currentQuestionIndex].correct_choice-1],
        userAnswer:selectedChoice
    }

    dispatch(addAnswer({userAnswer}));
    currentChoiceIndex.current='';
    if(currentQuestionIndex == questions.length-1) navigate("/quizResults");
  }
//   console.log(questions);
//   console.log(userAnswers);

  return (
    <div className="mx-auto my-auto">
      <h3 className="my-3 w-200">{questions[currentQuestionIndex].question}</h3>
      {questions[currentQuestionIndex].choices.map((e, i) => (
        <div
          key={e}
          className={`choice my-2 ${e == selectedChoice ? "selected" : ""}`}
          onClick={() => {
            setSelectedChoice(e);
            currentChoiceIndex.current = i + 1;
          }}
        >
          {e}
        </div>
      ))}

      <div className="d-flex justify-content-center">
        <button
          onClick={() => SubmitAnswer()}
          className="btn btn-primary mt-4 w-50"
        >
          next
        </button>
        {/* {
            currentQuestionIndex == questions.length-1?
            <button 
            className="btn btn-success mt-4 w-25"
            onClick={()=>navigate("/quizResults")}
            >show Results</button>
            :''
        } */}
      </div>
    </div>
  );
}
