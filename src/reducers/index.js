import {combineReducers} from 'redux'
import InterestsReducer from './interests_reducer'
import FieldsReducer from './fields_reducer'


const rootReducer = combineReducers({
	interests: InterestsReducer,
	fields: FieldsReducer
})

export default rootReducer
