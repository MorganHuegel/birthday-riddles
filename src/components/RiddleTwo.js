import React from 'react';

import '../stylesheets/RiddleTwo.css';

export class RiddleTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfGuesses: 0,
      guessed24: false,
      guessed25: false,
      guessed26: false,
      guessed53: false,
      feedbackMsg: ''
    }
  }

  onClick = (event) => {
    const innerText = event.target.innerText;

    if (innerText === '25' && this.state.numOfGuesses < 4) {
      this.setState({
        feedbackMsg: 'Hmm that\'s what you might think. This is a riddle though...', 
        numOfGuesses: this.state.numOfGuesses + 1,
        guessed25: true
      })
    } else if (innerText === '24' && this.state.numOfGuesses < 4) {
      this.setState({
        feedbackMsg: 'No Carmen, you were 24 yesterday! Must\'ve had too much alcohol last night...', 
        numOfGuesses: this.state.numOfGuesses + 1,
        guessed24: true
      })
    } else if (innerText === '26' && this.state.numOfGuesses < 4) {
      this.setState({
        feedbackMsg: 'Not 26 yet! You\'re getting ahead of yourself.', 
        numOfGuesses: this.state.numOfGuesses + 1,
        guessed26: true
      })
    } else if (innerText === '53' && this.state.numOfGuesses < 4) {
      this.setState({
        feedbackMsg: 'Why the fuck would your age be 53?', 
        numOfGuesses: this.state.numOfGuesses + 1,
        guessed53: true
      })
    } 
    
    else if (innerText === 'your age') {
      let correctMsg = '';
      if (this.state.numOfGuesses === 0) {
        correctMsg = 'Wow, first click?? I can\'t trick you!';
      } else if (this.state.numOfGuesses === 1) {
        correctMsg = 'Second click, not bad! You\'ll be seeing that birthday present soon';
      } else if (this.state.numOfGuesses === 2) {
        correctMsg = 'Took 3 guesses to find "your age"?? And you call yourself a riddle master...'
      } else if (this.state.numOfGuesses === 3) {
        correctMsg = 'Wow, you had to guess 4 times on a multiple choice question??';
      } else if (this.state.numOfGuesses === 4) {
        correctMsg = 'Wow, you had to guess more than 4 times on a multiple choice question??';
      } else if (this.state.numOfGuesses < 6) {
        correctMsg = '...barely...';
      } else if (this.state.numOfGuesses < 9) {
        correctMsg = '...although I\'m not sure if you\'ll be able to finish...';
      } else if (this.state.numOfGuesses >= 9) {
        correctMsg = 'FINALLY!';
      }
      this.props.toggleCorrectScreen(true, correctMsg);
    } 

    else if (this.state.numOfGuesses === 4){
      this.setState({feedbackMsg: 'It\'s multiple choice; how did you need more than 4 guesses??', numOfGuesses: this.state.numOfGuesses + 1})
    } else if (this.state.numOfGuesses === 5){
      this.setState({feedbackMsg: 'Maybe you should just re-read the riddle', numOfGuesses: this.state.numOfGuesses + 1})
    } else if (this.state.numOfGuesses === 6){
      this.setState({feedbackMsg: 'But really, re-read the riddle. What does "your age" mean?', numOfGuesses: this.state.numOfGuesses + 1})
    } else if (this.state.numOfGuesses === 7){
      this.setState({feedbackMsg: 'Oh my god, it\'s hopeless...', numOfGuesses: this.state.numOfGuesses + 1})
    } else if (this.state.numOfGuesses === 8){
      this.setState({feedbackMsg: 'But seriously, just click on "your age"', numOfGuesses: this.state.numOfGuesses + 1})
    } else if (this.state.numOfGuesses === 9){
      this.setState({feedbackMsg: 'YOUR AGE!!!!', numOfGuesses: this.state.numOfGuesses + 1})
    } else if (this.state.numOfGuesses === 10){
      this.setState({feedbackMsg: '"YOUR AGE". Is it changing colors yet??', numOfGuesses: this.state.numOfGuesses + 1})

    }
    
    else {
      this.setState({feedbackMsg: 'Carmen, just click on the "your age" link!', numOfGuesses: this.state.numOfGuesses + 1})
    }
  }

  render(){
    let strugglingHint = '';
    if (this.state.numOfGuesses === 10) {
      strugglingHint = 'ten-guesses';
    } else if (this.state.numOfGuesses === 11) {
      strugglingHint = 'eleven-guesses';
    } else if (this.state.numOfGuesses >= 12) {
      strugglingHint = 'twelve-guesses';
    }

    const guessed24 = this.state.guessed24 ? 'guessed' : '';
    const guessed25 = this.state.guessed25 ? 'guessed' : '';
    const guessed26 = this.state.guessed26 ? 'guessed' : '';
    const guessed53 = this.state.guessed53 ? 'guessed' : '';

    return (
    <div className='riddle-two'>
      <h2>Riddle #2</h2>
      <div className='clue'>
        <p>You're getting so damn old! This riddle is easy; Just click on <span className={strugglingHint} id='your-age-link' onClick={event => this.onClick(event)}>your age</span>.</p>
        <p className={`riddle-two-option ${guessed24}`} onClick={event => this.onClick(event)}>24</p>
        <p className={`riddle-two-option ${guessed25}`} onClick={event => this.onClick(event)}>25</p>
        <p className={`riddle-two-option ${guessed26}`} onClick={event => this.onClick(event)}>26</p>
        <p className={`riddle-two-option ${guessed53}`} onClick={event => this.onClick(event)}>53</p>      
      </div>

      <p className='feedback'>{this.state.feedbackMsg}</p>
    </div>
    )
  }
}