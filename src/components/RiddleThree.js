import React from 'react';

import '../stylesheets/RiddleThree.css';

export class RiddleThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfGuesses: 0,
      feedbackMsg: ''
    }
  }

  onClick = (event) => {
    const targetId = event.target.id;

    if (targetId === 'link') {
      let correctMsg = ''
      if (this.state.numOfGuesses < 3) {
        correctMsg = 'Easy peasy!'
      } else if (this.state.numOfGuesses < 5) {
        correctMsg = 'Not bad! You might see your present after all!';
      } else if (this.state.numOfGuesses < 7) {
        correctMsg = '...although I have my doubts...';
      } else if (this.state.numOfGuesses < 10) {
        correctMsg = 'Were you just clicking randomly??';
      } else {
        correctMsg = 'Riddle master?? You should stick to cookie tasting or movie critiquing...';
      }
      this.props.toggleCorrectScreen(true, correctMsg);

    } else {
      let feedbackMsg = '';
      if (this.state.numOfGuesses < 1) {
        feedbackMsg = 'Hmm...try again.'
      } else if (this.state.numOfGuesses < 2) {
        feedbackMsg = 'Hmm...nope!';
      } else if (this.state.numOfGuesses < 3) {
        feedbackMsg = 'Just click over there, silly!';
      } else if (this.state.numOfGuesses < 4) {
        feedbackMsg = 'Is your brain taking the day off because it\'s your birthday?';
      } else if (this.state.numOfGuesses < 5) {
        feedbackMsg = 'Maybe if you just try clicking over there...';
      } else if (this.state.numOfGuesses < 6) {
        feedbackMsg = 'Carmen! Just click over there!';
      } else if (this.state.numOfGuesses < 7) {
        feedbackMsg = 'But really, just click over there. Its another dad-joke of a riddle.';
      } else if (this.state.numOfGuesses < 8) {
        feedbackMsg = 'Ugghhh seven clicks already? Good thing you have unlimited guesses!';
      } else if (this.state.numOfGuesses < 9) {
        feedbackMsg = 'Nope!';
      } else if (this.state.numOfGuesses < 10) {
        feedbackMsg = 'Keep trying!  You\'re gonna want to see your present. It\'s rad.';
      } else if (this.state.numOfGuesses < 11) {
        feedbackMsg = '10 guesses. You deserve a hint. "OVER" there.';
      } else if (this.state.numOfGuesses < 12) {
        feedbackMsg = 'OVER! Like you know, the preposition?';
      } else if (this.state.numOfGuesses < 13) {
        feedbackMsg = '"OVER"! As in "Oh my god, I am OVER this!"';
      } else if (this.state.numOfGuesses < 14) {
        feedbackMsg = 'Why are you at guess number 13, you\'re a fucking genius?';
      } else if (this.state.numOfGuesses < 15) {
        feedbackMsg = 'Are you just clicking with hopes that you\'ll receive a hint?';
      } else if (this.state.numOfGuesses < 16) {
        feedbackMsg = 'Okay fine. "OVER" there!';
      } else if (this.state.numOfGuesses < 17) {
        feedbackMsg = '"OVER"! As in "This game will never be over"';
      } else {
        feedbackMsg = 'Haha okay, just click the fucking colored box.';
      }
      this.setState({numOfGuesses: this.state.numOfGuesses + 1, feedbackMsg})
    }
  }


  render(){
    let hintClass = '';
    if (this.state.numOfGuesses > 10) {
      hintClass = 'ten-guesses';
    }
    if (this.state.numOfGuesses > 13) {
      hintClass = 'thirteen-guesses';
    }
    if (this.state.numOfGuesses > 14) {
      hintClass = 'fourteen-guesses';
    }

    return (
    <div className='riddle-three' onClick={(e) => this.onClick(e)}>
      <h2>Riddle #3</h2>
      <div className='clue'>
        <p>Now that you've got the hang of it, this one should be easy. Just click over there.
          <span id='link' className={hintClass} onClick={(e) => this.onClick(e)}></span>
        </p> 
      </div>

      <p className='feedback'>{this.state.feedbackMsg}</p>
    </div>
    )
  }
}