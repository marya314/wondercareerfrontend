export default function QuizResultsReducer (state=[], action) {
  switch(action.type){
    case 'SCORE_QUIZ':
    	return action.payload
    default:
      return state
  }
}
