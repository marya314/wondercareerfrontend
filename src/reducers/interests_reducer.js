export default function InterestsReducer(state=[], action){
	switch(action.type){
		case 'FETCH_INTERESTS':
			// console.log('interests reducer: ', action.payload)
			return action.payload
			// return [...state, action.payload]
			// return Object.assign({}, state, {
			// 	interests: [
			// 	...action.payload
			// 	]
			// })
		default:
			return state
	}
}
