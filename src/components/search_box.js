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
			selectedInterests: [],
			term: ""
		}
		this.checkboxHandler = this.checkboxHandler.bind(this)
	}

	// componentWillMount

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

	handleSearchChange(event) {
		this.setState({term: event.target.value})
	}

	render(){
		return(
			<div id="search-mother">
				<div id="search-by-interest">
					<h3>Search by Interest</h3>
					<input value={this.state.term} placeholder="Search Interests" onChange={this.handleSearchChange.bind(this)} />
					<form>
					{this.props.interests.filter((interest) =>{
						return (this.state.term === "") || (interest.name.includes(this.state.term.toLowerCase()))}).map((interest) => {
							return(
								<div key={interest.id}>
									<input type="checkbox" id={interest.id} onChange={this.checkboxHandler} ref={interest.id} checked={this.state.selectedInterests.includes(interest)}/>
									<label htmlFor={interest.id}> {interest.name}</label>
								</div>
							)
						})}

					</form>
				</div>
				<div id="search-children">
					{this.props.children}
				</div>
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
