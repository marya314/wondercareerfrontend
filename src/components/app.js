import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import NavBar from './nav_bar'
import SearchBox from './search_box'
import FieldList from './field_list'
import FieldDetail from './field_detail'
import FigureDetail from './figure_detail'

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			selectedField: null
		}
		this.changeSelectedField = this.changeSelectedField.bind(this)
	}

	changeSelectedField(field){
		this.setState({
			selectedField: field
		})
	}

	render(){
		return(
			<div>
				<NavBar title="Career Yeah!" url="/" />
				<div className="col-md-4">
					<SearchBox />
				</div>
				<div className="col-md-3">
					<FieldList selectedField={this.state.selectedField} changeSelectedField={this.changeSelectedField} />
				</div>
				<div className="col-md-5">
					<FieldDetail selectedField={this.state.selectedField} />
				</div>
				<div className="col-md-12">
					<FigureDetail />
				</div>
			</div>
		)
	}
}


function mapStateToProps(state){
	return{
		selectedField: state.selectedField
	}
}

export default connect(mapStateToProps)(App)
