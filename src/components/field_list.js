import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

function FieldList (props){

	return(
		<div>
			<div className="col-md-2" id="field-list">
				<h3>Field List!</h3>
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
