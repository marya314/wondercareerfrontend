import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

export default function (props){
	return(
		<div>
			<h3>{props.selectedField.name}</h3>
			<p><strong>About this career field: </strong>{props.selectedField.description}</p>
			<h4>Notable Figures in This Field</h4>
			<ul>
				{props.selectedField.figures.map((figure) => {
					return (
						<div>
							<li key={figure.id}>
								<Link to={`/fields/${props.selectedField.id}/figures/${figure.id}`}>{figure.name}</Link>
							</li>
						</div>
					)
				})}
			</ul>

		</div>
	)
}
