import React from 'react'
import {connect} from 'react-redux'

function FigureDetail(props) {
	return(
			<div id="figure-detail">
				<h1>{props.figure.name}</h1>
				<p><em>"{props.figure.tagline}"</em></p>
				<p>{props.figure.bio}</p>
				<img width="300" src={props.figure.image} />

				<h3>Resources</h3>
				<ul>
					{props.figure.links.map((link) => {
						return(
							<li key={link.id}>
								<a href={link.url} target="_blank">{link.title}</a>
							</li>
							)
					})}
				</ul>
			</div>
	)
}

function mapStateToProps(state, ownProps){
	// find the field associated with figure
	const field = state.fields.find((field) => {return field.id === parseInt(ownProps.params.field_id) } )

	// find the figure from that field
	const figure = field.figures.find( (figure) => {return figure.id === parseInt(ownProps.params.id)} )

	return{
		figure: figure
	}
}

export default connect(mapStateToProps)(FigureDetail)
