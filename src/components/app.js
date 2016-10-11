import React from 'react'
import NavBar from './nav_bar'
import Home from './home'


class App extends React.Component {
	render(){
		return(
			<div className="container" id="app">
				<NavBar title="WonderCareer" url="/" />
				{this.props.children}
			</div>
		)
	}
}

export default App
