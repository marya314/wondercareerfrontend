import React from 'react'
import NavBar from './nav_bar'
import SearchBox from './search_box'

class App extends React.Component {
	render(){
		return(
			<div className="container" id="app">
				<NavBar title="Career Yeah!" url="/" />
				<div>
					<p>Welcome to WonderCareer! Check your interests in the box on the left, and see career fields you might be interested in -- and all the awesome women who've excelled in them.</p>
				</div>
				<SearchBox />
				{this.props.children}
			</div>
		)
	}
}

export default App
