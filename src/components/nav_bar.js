import React from 'react'

export default (props) =>{

	return(
		<nav>
	    <div className="nav-wrapper">
	      <a href="/home" className="brand-logo">{props.title + " 🐱!"}</a>
	      <ul id="nav-mobile" className="right hide-on-med-and-down">
	        <li><a href='/quiz'>Career Quiz</a></li>
	        <li><a href='/search'>Search By Interest</a></li>
	      </ul>
	    </div>
	  </nav>
	)
}
