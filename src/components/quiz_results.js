import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import QuizFieldDetail from './quiz_field_detail'

class QuizResults extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			selectedField: props.selectedField
		}
		console.log(props.quizResults)
	}

	render(){

		if (this.props.quizResults === undefined){
			return(
				<div>
					<h1>Calculating your results...</h1>
				</div>
			)
		} else {
			return (
				<div>
					<h2>Your Results!</h2>
					<p>According to our test, you would likely be happiest in one of these career fields:</p>
					<ol>
					{this.props.quizResults.map(field =>{
						return(
							<li key={field.id}>
								<Link to={`/fields/${field.id}`}>{field.name.toUpperCase()}</Link>
							</li>
						)
					})}
					</ol>
					
					<QuizFieldDetail selectedField={this.props.selectedField} />
					<br />
					<a href='/quiz'><small>Click here to retake the quiz!</small></a>
				</div>
			)
		}
	}
}

function mapStateToProps(state){
	if (state.quiz_results.length != 0){

		return({
			quizResults: state.quiz_results,
			selectedField: state.quiz_results[0]
		})

	} else {
		return({
			quizResults: [],
			selectedField: {name: '', description: '', figures: []}
		})
	}
}

export default connect(mapStateToProps)(QuizResults)
