import { useSelector } from "react-redux";

export default function UserResultsPage() {
    const { userAnswers , totalScore } = useSelector(
        (state) => state.choices
      );

      console.log(totalScore);

  return (
    <div className="mx-auto my-auto">
        <h4>Your TotalScore :<span className="mx-2">{`${totalScore} %`}</span> </h4>
        { userAnswers.map((answer,i)=>(
            <div key={i}>
             <h3  className="my-4 w-200">{answer.question}</h3>
             <div className="row">
                {
                    answer.choices.map((c,index)=>(
                        <div key={index} className={`col-sm-2 answer mx-1 p-2 ${answer.correctAnswer==c ? 'correctAnswer' : ''} ${(answer.correctAnswer!=answer.userAnswer)&&(answer.userAnswer==c) ? 'wrongAnswer' : ''}`}>{c}</div>
                    ))
                }
               
             </div>
             </div>
        ))}

   
  </div>
  )
}
