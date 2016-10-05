import React from 'react'
import NavBar from './nav_bar'
import SearchBox from './search_box'


class App extends React.Component {

	render(){
		debugger
		return(
			<div className="container" id="app">
				<NavBar title="Career Yeah!" url="/" />
				<SearchBox />
				{this.props.children}
			</div>
		)
	}
}

export default App
