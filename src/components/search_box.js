import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import FieldList from './field_list'
import FieldDetail from './field_detail'

class SearchBox extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			selectedInterests: []
		}
		this.checkboxHandler = this.checkboxHandler.bind(this)
	}

	checkboxHandler (event){
		if (event.target.checked){
			let selectedInterests = this.state.selectedInterests
			const newInterest = this.props.interests.find((interest) => {
				return (interest.id === parseInt(event.target.id))
			})

			this.setState({
				selectedInterests: [...selectedInterests, newInterest]
			})
			this.props.actions.fetchFields([...selectedInterests, newInterest])

			browserHistory.push('/fields')
		} else {
			let selectedInterests = this.state.selectedInterests

			const removedInterestId = parseInt(event.target.id)
			const removedInterest = this.state.selectedInterests.find((interest) => {return interest.id === removedInterestId})

			const indexOfRemovedItem = selectedInterests.indexOf(removedInterest)
			selectedInterests.splice(indexOfRemovedItem, 1)

			this.setState({
				selectedInterests: selectedInterests
			})

			this.props.actions.removeFields(selectedInterests)

		}
	}

	render(){
		return(
			<div>
				<h3>Search by Interest</h3>
				<div id="search-by-interest">
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
				{this.props.children}
			</div>
		)
	}
}

function mapStateToProps(state){
	console.log(state)
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
