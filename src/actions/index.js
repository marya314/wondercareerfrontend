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
			"question-content": "What would you rather do on a free Saturday?",
			"question-id": "q-1",
			"answers": [
				{
					"answer-content": "fixing people",
					"answer-id": "1-a",
					"scoring": {
						"science": 1,
						"healthcare": 1,
						"education": 1
					}
			},
				{
					"answer-content": "shopping at thrift-stores",
					"answer-id": "1-b",
					"scoring": {
						"art": 1,
						"music": 1
					}

				},
				{
					"answer-content": "building a custom computer",
					"answer-id": "1-c",
					"scoring":{
						"tech": 1,
						"engineering": 1,
						"science": 1,
						"trade": 1
					}
				},
				{
					"answer-content": "enjoying fine wines",
					"answer-id": "1-d",
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
				"question-content": "What would you rather do on a free Saturday?",
				"question-id": "q-2",
				"answers": [
					{
						"answer-content": "fixing people",
						"answer-id": "2-a",
						"scoring": {
							"science": 1,
							"healthcare": 1,
							"education": 1
						}
				},
					{
						"answer-content": "shopping at thrift-stores",
						"answer-id": "2-b",
						"scoring": {
							"art": 1,
							"music": 1
						}

					},
					{
						"answer-content": "building a custom computer",
						"answer-id": "2-c",
						"scoring":{
							"tech": 1,
							"engineering": 1,
							"science": 1,
							"trade": 1
						}
				},
				{
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
				"question-content": "What would you rather do on a free Saturday?",
				"question-id": "q-3",
				"answers": [
					{
						"answer-content": "fixing people",
						"answer-id": "3-a",
						"scoring": {
							"science": 1,
							"healthcare": 1,
							"education": 1
						}
				},
					{
						"answer-content": "shopping at thrift-stores",
						"answer-id": "3-b",
						"scoring": {
							"art": 1,
							"music": 1
						}

					},
					{
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

export function scoreQuiz(quizData, answers){

	// initial quiz results
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

	const questions = quizData.questions

	// iterate through questions
	questions.forEach( (question) => {
		evaluateAnswers(question.answers)
	})

	// for each answer of every question,
	// add its score to rawQuizResults
	function evaluateAnswers(answers){
		answers.forEach((answer) => {
			// get the keys for each answer
			const answerKeys = Object.keys(answer.scoring)

			// iterate through answerKeys to change rawQuizResults
			answerKeys.forEach((answerKey) => {
				rawQuizResults[answerKey] += answer.scoring[answerKey]			
			})

		})
		return rawQuizResults
	}

	return({
		type: 'SCORE_QUIZ',
		payload: quizResults
	})
}
