export function fetchInterests(){
	const interests = fetch('http://localhost:3000/api/v1/interests')
		.then(response => {return response.json()})
		.then(interests => {return interests})
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
	})
}

export function removeFields(newSelectedInterests){
	const stringifiedIds = JSON.stringify (newSelectedInterests.map((interest) => {return interest.id}))
	const fields = 	fetch('http://localhost:3000/api/v1/fields?interestIds='+ stringifiedIds)
			.then(response => {return response.json()})
			.then(fields => {return fields})

	return({
		type: 'REMOVE_FIELDS',
		payload: fields
	})
}

export function fetchQuiz(){

	// Quiz.new()
	// Question.new(answer_ids: [])
	// Answer.new(science: 0, art: 1, )

	let quizData = {
  "title": "Career Quiz",
	"questions": [
		{
			id: 1,
			"question-content": "What would you rather do on a free Saturday?",
			"answers": [
				{
					"answer-content": "fixing people",
					id: 1,
					"answer-id": "1-a",
					"question_id": 1,
					"scoring": {
						"science": 1,
						"healthcare": 1,
						"education": 1
					}
			},
				{
					"answer-content": "shopping at thrift-stores",
					id: 2,
					"answer-id": "1-b",
					"question_id": 1,
					"scoring": {
						"art": 1,
						"music": 1
					}

				},
				{
					"answer-content": "building a custom computer",
					id: 3,
					"answer-id": "1-c",
					"question_id": 1,
					"scoring":{
						"tech": 1,
						"engineering": 1,
						"science": 1,
						"trade": 1
					}
				},
				{
					"answer-content": "enjoying fine wines",
					id: 4,
					"answer-id": "1-d",
					"question_id": 1,
					"scoring":{
						"hospitality": 1,
						"music": 1,
						"editorial": 1,
						"law": 1,
						"business": 1		
					}
				}
			]
		},

			{
				id: 2,
				"question-content": "What would you rather do on a free Saturday?",
				"answers": [
					{
						id: 5,
						"question_id": 2,
						"answer-content": "fixing people",
						"answer-id": "2-a",
						"scoring": {
							"science": 1,
							"healthcare": 1,
							"education": 1
						}
				},
					{
						id: 6,
						"question_id": 2,
						"answer-content": "shopping at thrift-stores",
						"answer-id": "2-b",
						"scoring": {
							"art": 1,
							"music": 1
						}

					},
					{
						id: 7,
						"answer-content": "building a custom computer",
						"answer-id": "2-c",
						"question_id": 2,
						"scoring":{
							"tech": 1,
							"engineering": 1,
							"science": 1,
							"trade": 1
						}
				},
				{
					id: 8,
					"question_id": 2,
					"answer-content": "enjoying fine wines",
					"answer-id": "2-d",
					"scoring":{
						"hospitality": 1,
						"music": 1,
						"editorial": 1,
						"law": 1,
						"business": 1		
					}
				}
			]
		},

			{
				id: 3,
				"question-content": "What would you rather do on a free Saturday?",
				"answers": [
					{
						id: 10,
						"question_id": 3,
						"answer-content": "fixing people",
						"answer-id": "3-a",
						"scoring": {
							"science": 1,
							"healthcare": 1,
							"education": 1
						}
				},
					{
						id: 11,
						"question_id": 3,
						"answer-content": "shopping at thrift-stores",
						"answer-id": "3-b",
						"scoring": {
							"art": 1,
							"music": 1
						}

					},
					{
						id: 12,
						"question_id": 3,
						"answer-content": "building a custom computer",
						"answer-id": "3-c",
						"scoring":{
							"tech": 1,
							"engineering": 1,
							"science": 1,
							"trade": 1
						}
					},
					{
						id: 13,
						"question_id": 3,
						"answer-content": "enjoying fine wines",
						"answer-id": "3-d",
						"scoring":{
							"hospitality": 1,
							"music": 1,
							"editorial": 1,
							"law": 1,
							"business": 1		
						}
					}
				]
			}
		]
	}

	return({
		type: 'FETCH_QUIZ',
		payload: quizData
	})
}

export function scoreQuiz(quizData, userAnswers){

	 const rawQuizResults = {
    science: 0,
    art: 0,
    music: 0,
    education: 0,
    business: 0,
    tech: 0,
    hospitality: 0,
    healthcare: 0,
    editorial: 0,
    engineering: 0,
    law: 0,
    trade: 0	 	
	 }

	// to be mutated and returned
	const quizResults = []
	const questions = quizData.questions

	questions.forEach(question => {

		question.answers.forEach(answer => {
			evaluateAnswer(answer, userAnswers)
		})

	})

	function evaluateAnswer(answer, userAnswers){
		userAnswers.forEach(userAnswer => {
			if (userAnswer.answer === answer.id){
				const answerKeys = Object.keys(answer.scoring)
				answerKeys.forEach(answerKey => {
					rawQuizResults[answerKey] += answer.scoring[answerKey]
				})

	  	}
		})

	}

	// make an array out of the rawQuizResults that can be sorted
	const sortableQuizResults = []
	Object.keys(rawQuizResults).map( (field) => {
		sortableQuizResults.push (Object.assign({}, {field: field, score: rawQuizResults[field]
		}))
	})

	// sort sortableQuizResults scores from highest to lowest
	const sortedQuizResults = sortableQuizResults.sort( (a, b) => {
		if (a.score > b.score){ return 1 }
		if (a.score < b.score){ return -1 }
		return 0
	})

	const topThreeFields = sortedQuizResults.slice(-3)
	// const fieldNames = JSON.stringify(topThreeFields.map(field) => {
	// 	return field.field
	// })
	// baseUrl = 'http://localhost:3000/api/v1/fields'
	// const topThreeFieldData = fetch(`${baseUrl}/fields?fieldIds=${fieldNames}`)
	// 	.then(response => {return response.json()})
	// 	.then (fields => {return fields})

	topThreeFields.forEach(result => {
		quizResults.push(result)
	})

	return({
		type: 'SCORE_QUIZ',
		payload: quizResults
	})
}
