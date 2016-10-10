import {combineReducers} from 'redux'
import InterestsReducer from './interests_reducer'
import FieldsReducer from './fields_reducer'
import QuizReducer from './quiz_reducer'
import QuizResultsReducer from './quiz_results_reducer'


const rootReducer = combineReducers({
	interests: InterestsReducer,
	fields: FieldsReducer,
	quiz: QuizReducer,
	quiz_results: QuizResultsReducer
})

export default rootReducer
