import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

function FieldList (props){

	return(
		<div>
			<div id="field-list">
				<h3>Career Fields:</h3>
				<ul>
				{props.fields.map((field) => {
					return(
					<li key={'field' + field.id}>
						<Link to={`/fields/${field.id}`}>
							{field.name}
						</Link>
					</li>
				)
			})}
				</ul>
			</div>
			{props.children}
		</div>
	)
}

function mapStateToProps(state){
	return{
		fields: state.fields
	}
}

export default connect(mapStateToProps)(FieldList)
