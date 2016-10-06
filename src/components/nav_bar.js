import React from 'react'

export default (props) =>{

	return(
		<nav className="navbar navbar-inverse">
			<div className="navbar-header">
				<a className="navbar-brand" href={props.url}>
					{props.title + " 🐱!"}
				</a>
			</div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li><a href='/quiz' target="_blank">Career Quiz</a></li>
				</ul>
			</div>
		</nav>
	)
}