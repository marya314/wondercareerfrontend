import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

function FieldDetail(props) {
	return(
		<div className="col-md-5">
			<h2>{props.selectedField.name}</h2>
			<p>{props.selectedField.description}</p>
			<ul>
				{props.selectedField.figures.map((figure) => {
					return (
						<div>
							<li key={figure.id}>
								<Link to={`/figures/${figure.id}`}>{figure.name}</Link>
							</li>
						</div>
					)
				})}
			</ul>
			{props.children}
		</div>
	)
}

function mapStateToProps(state, ownProps){
	return{
		selectedField: state.fields.find((field) => {return field.id === parseInt(ownProps.routeParams.id)} )
	}
}

export default connect(mapStateToProps)(FieldDetail)
