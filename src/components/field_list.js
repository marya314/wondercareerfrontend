import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

function FieldList (props){

	return(
		<div>
			<h1>Field List!</h1>
			<ul>
			{props.fields.map((field) => {
				return(
				<li>
					<Link to={`/fields/${field.id}`} onClick={props.changeSelectedField(field)}>
						{field.name}
					</Link>
				</li>
			)
		})}
			</ul>

		</div>
	)
}

function mapStateToProps(state){
	return{
		fields: state.fields
	}
}

export default connect(mapStateToProps)(FieldList)
