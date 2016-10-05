import React from 'react'
import NavBar from './nav_bar'
import SearchBox from './search_box'


class App extends React.Component {

	render(){
		return(
			<div className="row" id="app">
				<NavBar title="Career Yeah!" url="/" />
				<SearchBox />
				{this.props.children}
			</div>
		)
	}
}

export default App
