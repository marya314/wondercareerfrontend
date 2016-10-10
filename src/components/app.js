import React from 'react'
import NavBar from './nav_bar'


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
