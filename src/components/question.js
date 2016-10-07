import React from 'react'
import {connect} from 'react-redux'

export default function Question(props){
	return(
		<div>
			<li>{props.question}</li>
			{props.answers.map((answer) => {
				return(
					<div key={answer['answer-id']}>
						<input name={props.questionId} id={answer['answer-id']} type="radio" onChange={props.addAnswer} />
						<label key={answer['answer-id']} htmlFor={answer['answer-id']}>{answer['answer-content']}</label>
					</div>
				)}
			)}
		</div>
	)
}
