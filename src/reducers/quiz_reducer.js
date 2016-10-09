export default function QuizReducer (state=[], action) {
  switch(action.type){
    case 'FETCH_QUIZ':
      return action.payload
    case 'SCORE_QUIZ':
    	return Object.assign({}, state, {quizResults: action.payload}, {step: 1})
    default:
      return state
  }
}
