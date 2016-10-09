const localhostUrl = 'http://localhost:3000/'
const baseUrl = 'https://polar-basin-83640.herokuapp.com/'

export function fetchInterests(){
	const interests = fetch(`${localhostUrl}api/v1/interests`)
		.then(response => {return response.json()})
		.then(interests => {return interests})
	return({
		type: 'FETCH_INTERESTS',
		payload: interests
	})
}

export function fetchFields(selectedInterests){
	const stringifiedIds = JSON.stringify (selectedInterests.map((interest) => {return interest.id}))
	const fields = 	fetch(`${localhostUrl}api/v1/fields?interestIds=${stringifiedIds}`)
			.then(response => {return response.json()})
			.then(fields => {return fields})
	return ({
		type: 'FETCH_FIELDS',
		payload: fields
	})
}

export function removeFields(newSelectedInterests){
	const stringifiedIds = JSON.stringify (newSelectedInterests.map((interest) => {return interest.id}))
	const fields = 	fetch(`${localhostUrl}api/v1/fields?interestIds=${stringifiedIds}`)
			.then(response => {return response.json()})
			.then(fields => {return fields})
	return({
		type: 'REMOVE_FIELDS',
		payload: fields
	})
}

export function fetchQuiz(){
	const quizData = fetch(`${localhostUrl}api/v1/quizzes/1`)
		.then(response => {
			return response.json()
		})
		.then(quiz => {
			return quiz
		})
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
