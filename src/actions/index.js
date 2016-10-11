// const baseUrl = 'http://localhost:3000/api/v1/'
const baseUrl = 'https://wonderapi.herokuapp.com/api/v1/'

export function fetchInterests(){
	const interests = fetch(`${baseUrl}interests`)
		.then(response => {return response.json()})
		.then(interests => {return interests})
	return({
		type: 'FETCH_INTERESTS',
		payload: interests
	})
}

export function fetchFields(selectedInterests){
	const stringifiedIds = JSON.stringify (selectedInterests.map((interest) => {return interest.id}))
	const fields = 	fetch(`${baseUrl}fields?interestIds=${stringifiedIds}`)
			.then(response => {return response.json()})
			.then(fields => {return fields})
	return ({
		type: 'FETCH_FIELDS',
		payload: fields
	})
}

export function removeFields(newSelectedInterests){
	const stringifiedIds = JSON.stringify (newSelectedInterests.map((interest) => {return interest.id}))
	const fields = 	fetch(`${baseUrl}fields?interestIds=${stringifiedIds}`)
			.then(response => {return response.json()})
			.then(fields => {return fields})
	return({
		type: 'REMOVE_FIELDS',
		payload: fields
	})
}

export function fetchQuiz(){
	const quizData = fetch(`${baseUrl}quizzes/1`)
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

	const questions = quizData.questions
	const rawQuizResults = {
    science: 0,
    art: 0,
    music: 0,
    education: 0,
    business: 0,
    technology: 0,
    hospitality: 0,
    healthcare: 0,
    editorial: 0,
    engineering: 0,
    law: 0,
    trade: 0
	 }

	questions.forEach(question => {

		question.answers.forEach(answer => {
			evaluateAnswer(answer, userAnswers)
		})

	})

	function evaluateAnswer(answer, userAnswers){
		userAnswers.forEach(userAnswer => {
			if (userAnswer.answer === answer.id){
				const answerScoring = JSON.parse(answer.scoring)
				const answerKeys = Object.keys(answerScoring)
				answerKeys.forEach(answerKey => {
					rawQuizResults[answerKey] += answerScoring[answerKey]
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

	// we need to see the results ranked by score
	const topThreeFields = sortedQuizResults.slice(-3)
	const rankedQuizResults = []
	topThreeFields.forEach(result => {
		rankedQuizResults.unshift(result)
	})

	// and we need the actual result data
	const stringifiedFieldNames = JSON.stringify(topThreeFields.map((field) => {return field.field}))
	const topThreeFieldData = fetch(`${baseUrl}fields?fieldNames=${stringifiedFieldNames}`)
		.then(response => {return response.json()})
		.then(fields => {return fields})

	return({
		type: 'SCORE_QUIZ',
		payload: topThreeFieldData
	})
}
