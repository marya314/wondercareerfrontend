import {combineReducers} from 'redux'
import InterestsReducer from './interests_reducer'
import FieldsReducer from './fields_reducer'
import QuizReducer from './quiz_reducer'


const rootReducer = combineReducers({
	interests: InterestsReducer,
	fields: FieldsReducer,
	quiz: QuizReducer
})

export default rootReducer
