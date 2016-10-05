import React from 'react'
import NavBar from './nav_bar'
import SearchBox from './search_box'


class App extends React.Component {

	render(){
		return(
			<div>
				<NavBar title="Career Yeah!" url="/" />
				<div className="col-md-4">
					<SearchBox />
				</div>
					{this.props.children}
			</div>
		)
	}
}

export default App
