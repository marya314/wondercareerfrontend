import React from 'react'
import {Link} from 'react-router'

import FieldDetail from './field_detail'

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
							<Link to={`/fields/${field.id}`}>{field.name}</Link>
						</li>
					)
				})}
				</ol>
				<FieldDetail />
				<a href='/quiz'>Unhappy with your results? Click here to retake the quiz!</a>
			</div>
		)
	}
}
