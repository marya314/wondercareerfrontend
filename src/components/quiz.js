import React from 'react'
// import jsonLoader from 'json-loader'
// import quizData from 'json!./quiz-json-test.json';
// ``` javascript
// var json = require("json!./file.json");
// // => returns file.json content as json parsed object
// ```


class Quiz extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      answers: [],
      science: 0,
      art: 0,
      music: 0,
      education: 0,
      business: 0,
      tech: 0,
      hospitality: 0,
      healthcare: 0,
      editorial: 0,
      engineering: 0,
      law: 0,
      trade: 0
    }
    this.submitForm = this.submitForm.bind(this)
  }





  submitForm(event){
    event.preventDefault();
    debugger
    this.refs['1-a'].checked

    const answers = this.state.answers

    if (answer.checked){
      this.setState({
        
      })
    }

  }

  render(){
    return(
      <div id="quiz">

        <h2>Career Quiz</h2>
        <p>Answer a few questions to determine your ideal career field...</p>
        <form onSubmit={this.submitForm}>
          <p>1. What would you rather do on a free Saturday?</p>
          <input name="q-1" id='1-a' ref='1-a' type="radio" />
          <label htmlFor='1-a'>a) Fixing people (--> healthcare, science, education)</label>
          <br />
          <input name="q-1" id='1-b' ref='1-b' type="radio" />
          <label htmlFor='1-b'>b) Shopping at thrift stores (--> art, music)</label>
          <br />
          <input name="q-1" id='1-c' ref='1-c' type="radio" />
          <label htmlFor='1-c'>c) Building your own custom computer (--> tech, engineering, science, trade)</label>
          <br />
          <input name="q-1" id='1-d' ref='1-d' type="radio" />
          <label htmlFor='1-d'>d) Enjoying fine wines (--> hospitality, music, editorial, law, business)</label>

          <p>2. Pick the image that most excites you:</p>
          <input name="q-2" id='2-a' type="radio" />
          <label htmlFor='2-a'>1) Picture of money (--> Business, Law)</label>
          <br />
          <input name="q-2" id='2-b' type="radio" />
          <label htmlFor='2-b'>  2) Picture of kittens next to books (--> science, editorial, art, medicine, education)</label>
          <br />
          <input name="q-2" id='2-c' type="radio" />
          <label htmlFor='2-c'>  3) Picture of A lot of FOOD! (--> hospitality)</label>
          <br />
          <input name="q-2" id='2-d' type="radio" />
          <label htmlFor='2-d'>  4) Picture of welding (--> trade, tech, engineering)</label>
          <p>3. If you saw a kitten stuck in a tree how would you help it?</p>
          <input name="q-3" id='3-a' type="radio" />
          <label htmlFor='3-a'>a) Call for help (--> editorial, education, hospitality, healthcare)</label>
          <br />
          <input name="q-3" id='3-b' type="radio" />
          <label htmlFor='3-b'>b) Build a ladder to climb up the tree (--> science, engineering, tech)</label>
          <br />
          <input name="q-3" id='3-c' type="radio" />
          <label htmlFor='3-c'>c) Suit-up! Climb the tree with your bare hands (--> trade, art, music)</label>
          <br />
          <input name="q-3" id='3-d' type="radio" />
          <label htmlFor='3-d'>d) Ignore the kitten, they always land on their feet (--> business, law)</label>
          <p>4. Which of these sentiments do you agree with most?</p>
          <input name="q-4" id='4-a' type="radio" />
          <label htmlFor='4-a'>a) "What we do every night, Pinky. Try to take over the world" --Brain (--> business, science, law)</label>
          <br />
          <input name="q-4" id='4-b' type="radio" />
          <label htmlFor='4-b'>b)"Hakuna Matata" --Puumba and Timon (--> art, music)</label>
          <br />
          <input name="q-4" id='4-c' type="radio" />
          <label htmlFor='4-c'>c) "Guard well within yourself that treasure, kindness. Know how to give without hesitation, how to lose without regret, how to acquire without meanness." -George Sand (--> hospitality, healthcare, editorial, art, education)</label>
          <br />
          <input name="q-4" id='4-d' type="radio" />
          <label htmlFor='4-d'>d) "Computers make excellent and efficient servants but I have no wish to serve under them." --Mr. Spock (--> science, tech, engineering, trade)</label>
          <p>5. Rate how strongly you agree with the following statement:</p>
          <p><em>"I always tip at least 20% because everyone deserves a living wage"</em></p>
          <input name="q-5" id='5-a' type="radio" />
          <label htmlFor='5-a'>Strongly Disagree (--> law)</label>
          <br />
          <input name="q-5" id='5-b' type="radio" />
          <label htmlFor='5-b'>Disagree (--> business)</label>
          <br />
          <input name="q-5" id='5-c' type="radio" />
          <label htmlFor='5-c'>Neutral (--> trade, science, tech, engineering)</label>
          <br />
          <input name="q-5" id='5-d' type="radio" />
          <label htmlFor='5-d'>Agree (--> editorial, education, healthcare)</label>
          <br />
          <input name="q-5" id='5-e' type="radio" />
          <label htmlFor='5-e'>Strongy Agree (--> hospitality, art, music)</label>
          <p>6. Pick the character you most identify with:</p>
          <input name="q-6" id='6-a' type='radio' />
          <label htmlFor='6-a'>Ariel (--> music)</label>
          <br />
          <input name="q-6" id='6-b' type='radio' />
          <label htmlFor='6-b'>Gaston (--> law)</label>
          <br />
          <input name="q-6" id='6-c' type='radio' />
          <label htmlFor='6-c'>Beaker (--> science)</label>
          <br />
          <input name="q-6" id='6-d' type='radio' />
          <label htmlFor='6-d'>Pocahontas (--> art)</label>
          <br />
          <input name="q-6" id='6-e' type='radio' />
          <label htmlFor='6-e'>Tiana (--> hospitality, business)</label>
          <br />
          <input name="q-6" id='6-f' type='radio' />
          <label htmlFor='6-f'>Gepetto (--> trade)</label>
          <br />
          <input name="q-6" id='6-g' type='radio' />
          <label htmlFor='6-g'>Wall-e (--> tech)</label>
          <br />
          <input name="q-6" id='6-h' type='radio' />
          <label htmlFor='6-h'>Belle (--> editorial)</label>
          <br />
          <input name="q-6" id='6-i' type='radio' />
          <label htmlFor='6-i'>Scrooge McDuck (--> business)</label>
          <br />
          <input name="q-6" id='6-j' type='radio' />
          <label htmlFor='6-j'>Lego Batman (--> engineering)</label>
          <br />
          <input name="q-6" id='6-k' type='radio' />
          <label htmlFor='6-k'>Rafiki (--> healthcare)</label>
          <br />
          <input name="q-6" id='6-l' type='radio' />
          <label htmlFor='6-l'>Yoda (--> education)</label>
          <p>7. What's your preferred color?</p>
          <input name="q-7" id='7-a' type='radio' />
          <label htmlFor='7-a'>red (--> art, music, editorial, business)</label>
          <br />
          <input name="q-7" id='7-b' type='radio' />
          <label htmlFor='7-b'>yellow (--> hospitality, education, law)</label>
          <br />
          <input name="q-7" id='7-c' type='radio' />
          <label htmlFor='7-c'>blue (--> healthcare, trade, science, engineering, tech)</label>
          <p>8. True or False: You like to work from home.</p>
           <input name="q-8" id='8-a' type='radio' />
           <label htmlFor='8-a'>True: (--> business, art, music, editorial, tech)</label>
           <br />
           <input name="q-8" id='8-b' type='radio' />
           <label htmlFor='8-b'>False: (--> hospitality, science, law, healthcare, trade, engineering, education)</label>
          <p>9. What does this look like to you?</p>
          <p>[Image of Rorschach test]</p>
          <label htmlFor='9-a'>Type in your answer here:</label>
          <input name="q-9" id="9-a" type="text" />

          <input type="submit" />
      </form>
    </div>
    )
  }
}

export default Quiz
