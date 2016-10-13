import React from 'react'

export default (props) =>{

	return(
		<nav className="pink">
	    <div className="nav-wrapper">
	      <a href="/" className="brand-logo">{props.title + " 🐱!"}</a>
	      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
	      <ul className="right hide-on-med-and-down">
	        <li><a href='/quiz'>Career Quiz</a></li>
	        <li><a href='/search'>Search By Interest</a></li>
	      </ul>
	      <ul className="side-nav" id="mobile-demo">
	        <li><a href='/quiz'>Career Quiz</a></li>
	        <li><a href='/search'>Search By Interest</a></li>
	      </ul>
	    </div>
		</nav>
	)
}
