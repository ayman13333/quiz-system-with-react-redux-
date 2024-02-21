import { combineReducers } from 'redux';
import choicesReducer from './userQuestionsSlice';

const rootReducer = combineReducers({
  choices:choicesReducer
});

export default rootReducer;