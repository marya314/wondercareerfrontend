import React from 'react'
import {connect} from 'react-redux'

function FieldList (props){
debugger
	return(
		<div>
			<h1>Field List!</h1>
			{props.fields.map((field) => {return <p>{field.name}</p>})}
		</div>
	)
}

function mapStateToProps(state){
	return{
		fields: state.fields
	}
}

export default connect(mapStateToProps)(FieldList)
