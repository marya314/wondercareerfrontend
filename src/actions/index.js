export function fetchInterests(){
	const interests = fetch('http://localhost:3000/api/v1/interests')
		.then(response => {return response.json()})
		.then(interests => {return interests})
	// const interests = [{id: 1, name: "crafts"}, {id: 2, name: "medicine"}, {id: 3, name: "food"}, {id: 4, name: "animal welfare"}, {id: 5, name: "programming"}, {id: 6, name: "fashion"}]
	return({
		type: 'FETCH_INTERESTS',
		payload: interests
	})
}

export function fetchFields(selectedInterests){
	const stringifiedIds = JSON.stringify (selectedInterests.map((interest) => {return interest.id}))
	const fields = 	fetch('http://localhost:3000/api/v1/fields?interestIds='+ stringifiedIds)
			.then(response => {return response.json()})
			.then(fields => {return fields})
	return ({
				type: 'FETCH_FIELDS',
				payload: fields
				// [{id: 1, name: 'Art', description: 'Making stuff pretty'}, {id: 2, name: 'Computer Schmience', description: 'Breaking schomputers'}]
			})
}
