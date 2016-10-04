import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


class SearchBox extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			selectedInterests: []
		}
		this.checkboxHandler = this.checkboxHandler.bind(this)
	}

	checkboxHandler (event){
		const interests = this.state.selectedInterests
		if (event.target.checked){
			const newInterest = this.props.interests.filter((interest) => {
				return (interest.id === parseInt(event.target.id))
			})

			this.setState({
				selectedInterests: [...interests, newInterest]
			})

			actions.fetchFields(slfjds)
			debugger
		} else {
			debugger
		}

		debugger
	}

	render(){
		return(
			<div>
				<h1>Search Your Interests</h1>
				<form>
					{this.props.interests.map((interest) => {
						return(
							<div key={interest.id}>
								<input type="checkbox" id={interest.id} onChange={this.checkboxHandler} ref={interest.id} />
								<label htmlFor={interest.id}> {interest.name}</label>
							</div>
						)
					})}
	
				</form>
			</div>
		)
	}
}

function MapStateToProps(state){
	return{
		interests: state.interests
	}
}

export default connect(MapStateToProps)(SearchBox)
