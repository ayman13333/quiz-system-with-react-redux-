import { createSlice, current } from '@reduxjs/toolkit';
import data from '../data/data.json';

const userQuestionsSlice=createSlice({
    name:'choices',
    initialState:{
        questions:data.questions,
        userAnswers:[],
        currentQuestionIndex:0
    },
    reducers:{
        addAnswer(state,action){
            console.log('action.payload');
            console.log(action.payload);
           // let newAnswer=action.payload.userAnswer;
            state.userAnswers=[...state.userAnswers,action.payload.userAnswer];
            if(state.currentQuestionIndex == state.questions.length-1){
                state.currentQuestionIndex=0;
            }
            else{
                state.currentQuestionIndex++;
            }
            
        }
    }
});

export const {addAnswer}=userQuestionsSlice.actions
export default userQuestionsSlice.reducer;