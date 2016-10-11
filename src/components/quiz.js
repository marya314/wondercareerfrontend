import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'

import Question from './question'
import QuizResults from './quiz_results'

class Quiz extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      answers: [],
      quiz_status: 0
    }
    this.addAnswer = this.addAnswer.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  addAnswer(event){
    const answer = event.target
    const allAnswers = this.state.answers
    allAnswers.push({question: parseInt(answer.name), answer: parseInt(answer.id)})
    this.setState({
      answers: allAnswers
    })
    console.log(this.state.answers)
  } 

  submitForm(event){
    event.preventDefault();
    const quizData = this.props.quiz
    const allAnswers = this.state.answers
    this.props.actions.scoreQuiz(quizData, allAnswers)
    this.setState({
      answers: [],
      quiz_status: 1
    })
  }

  render(){
    if (this.state.quiz_status === 0){
      return(
        <div id="quiz">
          <form onSubmit={this.submitForm}>
            <ol>
              {this.props.quiz.questions.map((question) => {
                const answers = question.answers
                return(
                  <Question key={question.id} question={question['question_content']} questionId={question.id} answers={answers} addAnswer={(event) => {this.addAnswer(event)}} />

                )
              })}
              <div>
                <li>What does a Rorschoc test look like?</li>
                <label htmlFor="rorschoc">Type Your Reponse:</label>
                <input id="rorschoc" type="text" />
              </div>
            </ol>
            <input type="submit" />
          </form>          
        </div>
      )
    } else {
      return(
        <div id="quiz">
          <QuizResults quizResults={this.props.quiz_results} />
        </div>
      )
    }
  }
}

function mapStateToProps(state){
    console.log('quiz mapStateToProps: ', state.quiz)
  if (state.quiz.id != undefined){
    return({
      quiz: state.quiz,
      quiz_results: state.quiz_results
    })
  } else {
    return({
      quiz: {questions: []},
      quiz_results: []
    })
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
