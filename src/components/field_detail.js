import React from 'react'
import {connect} from 'react-redux'

function FieldDetail(props) {
	debugger

	return(
		<div>
			<h1>Field Detail!</h1>
			{props.selectedField}
		</div>
	)
}

function mapStateToProps(state){
	// debugger
	return{
		fields: state.selectedField
	}
}

export default connect(mapStateToProps)(FieldDetail)
