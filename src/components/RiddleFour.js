import React from 'react';

import '../stylesheets/RiddleFour.css';

export class RiddleFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfGuesses: 0,
      numOfGenerations: 1,
      randomNum: 84,
      feedbackMsg: ''
    }
  }

  handleGuess = () => {
    const guess = Number(document.getElementById('riddle-four-input').value);
    if (!guess) {
      return this.setState({feedbackMsg: 'You gotta enter a number before guessing, yo!'})
    }

    if (guess === this.state.randomNum) {
      const correctMsg = 'Damn gurl, dat binary search tho!';
      this.props.toggleCorrectScreen(true, correctMsg);
    }
    else if (guess < this.state.randomNum) {
      return (this.state.numOfGuesses >= 6) ?
        this.regenerateNumber() :
        this.setState({
          numOfGuesses: this.state.numOfGuesses + 1,
          feedbackMsg: `${guess} is too low. Try again!`
        })
    }
    else {
      return (this.state.numOfGuesses >= 6) ?
        this.regenerateNumber() :
        this.setState({
          numOfGuesses: this.state.numOfGuesses + 1,
          feedbackMsg: `${guess} is too high. Try again!`
        })
    }
  }

  regenerateNumber = () => {
    let newNum = Number((Math.random() * 100 + 1).toFixed());
    this.setState({
      numOfGuesses: 0,
      numOfGenerations: this.state.numOfGenerations + 1,
      randomNum: newNum,
      feedbackMsg: 'Ouch, the random number reset! :('
    });
  }


  render(){
    const hiddenClass = (!this.state.feedbackMsg) ? 'hidden' : '';

    return (
      <div className='riddle-four'>
        <h2>Riddle #4</h2>
        <p>Great job! Almost to your prize! This riddle should be easy if you're a good searcher...</p>
        <div className='clue'>
          <p>Don't let it ruin your slumber,</p>
          <p>it's just a random number.</p>
          <p>Between 1 and 100; A math nerd's heaven!</p>
          <p>But the number resets when your guess count hits seven.</p>
        </div>

        <input type='number' id='riddle-four-input'/>
        <div>
          <button onClick={() => this.handleGuess()}>Submit</button>
        </div>
        <p>Guess Count: {this.state.numOfGuesses}</p>
        <p className={'feedback ' + hiddenClass}>{this.state.feedbackMsg}</p>
      </div>
    )
  }
}