import React from 'react'

export default function(props){
	if (props.quizResults === undefined){
		return(
			<div>
				<h1>Calculating your results...</h1>
			</div>
		)
	} else {
		return (
			<div>
				<h2>Your Results!</h2>
				<p>According to our test, you would likely be happiest in one of these three career fields:</p>
				<ol>
				{props.quizResults.map(result =>{
					return(
						<li key={result.field}>{result.field}</li>
					)
				})}
				</ol>
				<a href='/quiz'>Unhappy with your results? Click here to retake the quiz!</a>
			</div>
		)	
	}
}
