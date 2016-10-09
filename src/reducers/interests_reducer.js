export default function InterestsReducer(state=[], action){
	switch(action.type){
		case 'FETCH_INTERESTS':
			console.log('interests reducer: ', action.payload)
			return [...state, action.payload]
		default:
			return state
	}
}
