import { createSlice, current } from '@reduxjs/toolkit';
import data from '../data/data.json';

const userQuestionsSlice=createSlice({
    name:'choices',
    initialState:{
        questions:data.questions,
        userAnswers:[],
        currentQuestionIndex:0,
        totalScore:0
    },
    reducers:{
        addAnswer(state,action){
          
           if(action.payload.userAnswer.userAnswer==action.payload.userAnswer.correctAnswer){
            state.totalScore=state.totalScore+action.payload.userAnswer.degree;
           }
            state.userAnswers=[...state.userAnswers,action.payload.userAnswer];
            
            if(state.currentQuestionIndex == state.questions.length-1){
                state.currentQuestionIndex=0;
            }
            else{
                state.currentQuestionIndex++;
            }
            
        },
        reset(state,action){
            state.userAnswers=[];
            state.currentQuestionIndex=0;
            state.totalScore=0;
        }
    }
});

export const {addAnswer,reset}=userQuestionsSlice.actions
export default userQuestionsSlice.reducer;