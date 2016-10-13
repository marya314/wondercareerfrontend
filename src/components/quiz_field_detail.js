import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import QuizFigureDetail from './quiz_figure_detail'

class QuizFieldDetail extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectedFigure: {id: null, name: null, bio: null, image: null, links: []}
		}
	}

	handleSelectedFigure(event){
		event.preventDefault();
		const newSelectedFigure = this.props.selectedField.figures.find((figure) => {return figure.name === event.target.text})
		this.setState({selectedFigure: newSelectedFigure})
	}
	render(){
	return(
		<div>
			<h3>{this.props.selectedField.name}</h3>
			<p><strong>About this career field: </strong>{this.props.selectedField.description}</p>
			{ this.props.selectedField.figures.length ? <h4>Notable Figures in This Field</h4> : null }
			<ul>
				{this.props.selectedField.figures.map((figure) => {
					return (
						<div>
							<li key={figure.id}>
								<a href="#" onClick={this.handleSelectedFigure.bind(this)}>{figure.name}</a>

							</li>
						</div>
					)
				})}
			</ul>
			<QuizFigureDetail figure={this.state.selectedFigure}/>
		</div>
	)
}
}

export default (QuizFieldDetail)
