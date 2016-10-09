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
				<h1>Your Results!</h1>

			</div>
		)	
	}

}
