import { useSelector } from "react-redux";

export default function UserResultsPage() {
    const { userAnswers } = useSelector(
        (state) => state.choices
      );

      console.log(userAnswers);

  return (
    <div className="mx-auto my-auto">
        { userAnswers.map((answer,i)=>(
            <>
             <h3 key={i} className="my-4 w-200">{answer.question}</h3>
             <div className="row">
                {
                    answer.choices.map((c,index)=>(
                        <div key={index} className={`col-sm-2 answer mx-1 p-2 ${answer.correctAnswer==c ? 'correctAnswer' : ''} ${(answer.correctAnswer!=answer.userAnswer)&&(answer.userAnswer==c) ? 'wrongAnswer' : ''}`}>{c}</div>
                    ))
                }
               
             </div>
             </>
        ))}

   
  </div>
  )
}
