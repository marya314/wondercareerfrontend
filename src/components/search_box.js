import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

class SearchBox extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			selectedInterests: []
			// selectedFields: []
		}
		this.checkboxHandler = this.checkboxHandler.bind(this)
	}

	checkboxHandler (event){
		if (event.target.checked){
			const selectedInterests = this.state.selectedInterests
			const newInterest = this.props.interests.find((interest) => {
				return (interest.id === parseInt(event.target.id))
			})

			this.setState({
				selectedInterests: [...selectedInterests, newInterest]
			})
			this.props.actions.fetchFields([...selectedInterests, newInterest])

			browserHistory.push('/fields')
		} else {
			const selectedInterests = this.state.selectedInterests

			const removedInterestId = parseInt(event.target.id)
			const removedInterest = this.state.selectedInterests.find((interest) => {return interest.id === removedInterestId})



			// problem!!! splice!!!!
			const newSelectedInterests = [...selectedInterests.slice(0, removedInterestId-1), ...selectedInterests.slice(removedInterestId,selectedInterests.length)]
			debugger



			this.setState({
				selectedInterests: newSelectedInterests
			})

			this.props.actions.removeFields(newSelectedInterests)

			console.log("removedInterestId: " + removedInterestId)
			console.log("newSelectedInterests: " + newSelectedInterests.map((int) => {return int.name}))
			console.log("state.selectedinterets: " + this.state.selectedInterests.map((int) => {return int.name}))



		}
	}

	render(){
		return(
			<div className="col-md-2" id="search-by-interest">
				<h3>Search by Interest</h3>
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

function mapStateToProps(state){
	return{
		interests: state.interests
	}
}

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
