export default function QuizReducer (state=[], action) {
  switch(action.type){
    case 'FETCH_QUIZ':
      return action.payload
    case 'SCORE_QUIZ':
    	return action.payload
    default:
      return state
  }

}
