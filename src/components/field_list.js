import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

function FieldList (props){

	return(
		<div className="col-md-3">
			<h1>Field List!</h1>
			<ul>
			{props.fields.map((field) => {
				return(
				<li key={field.id}>
					<Link to={`/fields/${field.id}`}>
						{field.name}
					</Link>
				</li>
			)
		})}
			</ul>
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
