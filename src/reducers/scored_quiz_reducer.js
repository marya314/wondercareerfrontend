export default function ScoredQuizReducer (state=[], action) {
  switch(action.type){
    case 'SCORE_QUIZ':
    	// return Object.assign({}, state, {quizResults: action.payload}, {step: 1})
    	return action.payload
    default:
      return state
  }
}
