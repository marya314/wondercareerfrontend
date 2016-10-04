import React from 'react'
// import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


export default class SearchBox extends React.Component{
	constructor(props){
		super(props)
		this.checkboxHandler = this.checkboxHandler.bind(this)

	}

	checkboxHandler (event){
		
		
		debugger
	}



	render(){
		return(
			<div>
				<h1>Search Your Interests</h1>
				<form>
					<input type="checkbox" id="checkbox" onChange={this.checkboxHandler} />
					<label htmlFor="checkbox">Check!</label>
					<input type="checkbox" id="checkbox2" ref="huh" onChange={this.checkboxHandler} />
					<label htmlFor="checkbox2">Check2!</label>				
				</form>
			</div>
		)
	}
}

function MapStateToProps(state){
	debugger

}

// export default connect(MapStateToProps)(SearchBox)