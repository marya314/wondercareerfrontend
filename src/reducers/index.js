import {combineReducers} from 'redux'
import InterestsReducer from './interests_reducer'

const rootReducer = combineReducers({
	interests: InterestsReducer
})

export default rootReducer
