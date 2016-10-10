import React from 'react'

export default function(props){
	if (props.quizResults === undefined){
		return(
			<div>
				<h1>Calculating your results...</h1>
			</div>
		)
	} else {
		debugger
		return (
			<div>
				<h2>Your Results!</h2>
				<p>According to our test, you would likely be happiest in one of these career fields:</p>
				<ol>
				{props.quizResults.map(field =>{
					return(
						<li key={field.id}>
							<h3>{field.name}</h3>
							<p>{field.description}</p>
							<h3>Notable Figures in This Field</h3>
						</li>
					)
				})}
				</ol>
				{props.quizResults.results}
				<a href='/quiz'>Unhappy with your results? Click here to retake the quiz!</a>
			</div>
		)
	}
}
