import React from 'react'
import {connect} from 'react-redux'

function FieldDetail(props) {
	return(
		<div className="col-md-5">
			<h1>Field Detail!</h1>
			{props.selectedField.name}
		</div>
	)
}

function mapStateToProps(state, ownProps){
	return{
		selectedField: state.fields.find((field) => {return field.id === parseInt(ownProps.routeParams.id)} )
	}
}

export default connect(mapStateToProps)(FieldDetail)
