import {combineReducers} from 'redux'
import InterestsReducer from './interests_reducer'
import FieldsReducer from './fields_reducer'
import QuizReducer from './quiz_reducer'
import ScoredQuizReducer from './scored_quiz_reducer'


const rootReducer = combineReducers({
	interests: InterestsReducer,
	fields: FieldsReducer,
	quiz: QuizReducer,
	scored_quiz: ScoredQuizReducer
})

export default rootReducer
