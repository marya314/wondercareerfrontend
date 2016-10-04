import React from 'react'

export default (props) =>{

	return(
		<nav className="navbar navbar-inverse">
			<div className="navbar-header">
				<a className="navbar-brand href={props.url}">
					{props.title + " 🐱!"}
				</a>
			</div>
		</nav>
	)
}