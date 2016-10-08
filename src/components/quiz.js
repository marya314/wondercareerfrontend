import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'

import Question from './question'

class Quiz extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      answers: {}
    }
    // this.addAnswer = this.addAnswer.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  addAnswer(event){
    const answer = event.target
    const allAnswers = this.state.answers
    allAnswers[answer.name] = answer.id
    this.setState({
      answers: Object.assign({}, allAnswers)
    })
    console.log(this.state.answers)
  } 

  submitForm(event){
    event.preventDefault();
    const quizData = this.props.quiz
    const allAnswers = this.state.answers
    this.props.actions.scoreQuiz(quizData, allAnswers)
  }

  render(){
    return(

      <div id="quiz">
        <form onSubmit={this.submitForm}>
          <ol>
          {this.props.quiz.questions.map((question, i) => {
            const answers = question.answers
            return(
              <Question key={i} question={question['question-content']} questionId={question['question-id']} answers={answers} addAnswer={(event) => {this.addAnswer(event)}} />
            )
          })}
        </ol>
        <input type="submit" />
      </form>
    </div>
    )
  }
}

function mapStateToProps(state){
  return({
    quiz: state.quiz
  })
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
