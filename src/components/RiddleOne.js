import React from 'react';

import '../stylesheets/RiddleOne.css';

export class RiddleOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfGuesses: 0
    }
  }

  checkAnswer = (event) => {
    event.preventDefault();
    const answer = Number(document.getElementById('riddle-one-input').value);
    if (answer === 25) {
      let correctMsg = 'Dang, you\'re quick!';
      if (this.state.numberOfGuesses > 2) {
        correctMsg = 'Mehhh decent. Try to do better on the next one.';
      } else if (this.state.numberOfGuesses > 5) {
        correctMsg = 'Gonna have to do better if you want your present!';
      } else if (this.state.numberOfGuesses > 10) {
        correctMsg = 'Holy shit! It\'s about time!';
      }
      this.props.toggleCorrectScreen(true, correctMsg);
    } else {
      this.setState({numberOfGuesses: this.state.numberOfGuesses + 1})
    }
  }

  render(){
    let feedbackMsg = '';
    switch (this.state.numberOfGuesses) {
      case(0):
        feedbackMsg = '';
        break;
      case(1):
        feedbackMsg = 'Nope! Try again!';
        break;
      case(2):
        feedbackMsg = 'Nope! Third times a charm, though!';
        break;
      case(3):
        feedbackMsg = 'Okay, fourth times a charm?';
        break;
      case(4):
        feedbackMsg = 'Wow, maybe your are an average peasant...';
        break;
      case(5):
        feedbackMsg = 'The biggest riddle is why you suck so bad at this...';
        break;
      case(6):
        feedbackMsg = 'Is it because Lafayette has like 10 different zip codes?';
        break;      
      case(7):
        feedbackMsg = 'Aren\'t you a math major?  What does "+" mean?';
        break;
      case(8):
        feedbackMsg = 'Ok seriously, wtf! Try again.';
        break;
      case(9):
        feedbackMsg = 'I\'m giving up...the zip code is 47905';
        break;
      case(10):
        feedbackMsg = 'No! I said the zip code is 4 + 7 + 9 + 0 + 5';
        break;
      case(11):
        feedbackMsg = 'What\'s 4 + 7 + 9 + 0 + 5 ?';
        break;
      default:
        feedbackMsg = 'Haha ok come on now, just add 4 + 7 + 9 + 0 + 5';
        break;
    }

    return (
      <div className='riddle-one'>
        <h2>Clue #1</h2>
        <p className='clue'>
          <span className='first-clue-hint'>w + h + a + t</span>
          <span className='first-clue-hint'>i + s</span>
          <span className='first-clue-hint'>o + u + r</span>
          <span className='first-clue-hint'>c + u + r + r + e + n + t</span>
          <span className='first-clue-hint'>z + i + p</span>
          <span className='first-clue-hint'>c + o + d + e   ?</span>
        </p>
        <input type='number' id='riddle-one-input' name='riddle-one-input'/>
        <div>
          <button onClick={event => this.checkAnswer(event)}>Submit</button>
        </div>
        <p className='feedback-message'>{feedbackMsg}</p>
      </div>
    )
  }
}