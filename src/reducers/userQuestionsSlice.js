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
            state.userAnswers=[...state.userAnswers,action.payload];
            state.currentQuestionIndex++;
        }
    }
});

export const {addAnswer}=userQuestionsSlice.actions
export default userQuestionsSlice.reducer;