import React from 'react'
import {connect} from 'react-redux'

function FigureDetail() {
	return(
		<div>
			<img width="100" src="/src/images/ada.jpg" />
			<h1>Figure Detail</h1>
		</div>
	)
}

function mapStateToProps(state){
	return{
		fields: state.figure
	}
}

export default connect(mapStateToProps)(FigureDetail)
