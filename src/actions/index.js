export function fetchInterests(){
	const interests = [{id: 1, name: "crafts"}, {id: 2, name: "medicine"}, {id: 3, name: "food"}, {id: 4, name: "animal welfare"}, {id: 5, name: "programming"}, {id: 6, name: "fashion"}]

	return({
		type: 'FETCH_INTERESTS',
		payload: interests
	})
}