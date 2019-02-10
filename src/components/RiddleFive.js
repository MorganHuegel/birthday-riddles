import React from 'react';

import '../stylesheets/RiddleFive.css';

export class RiddleFive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfGuesses: 0,
      feedbackMsg:''
    }
  }

  handleGuess = () => {
    const guess = Number(document.getElementById('riddle-five-input').value);
    if (guess !== 100) {
      let feedbackMsg = '';
      switch(this.state.numOfGuesses) {
        case(0):
          feedbackMsg = 'Hmmm nope! Did you try acting it out?';
          break;
        case(1):
          feedbackMsg = 'Nope! But really, if you want to act it out, I\'ll gladly buy the paint.';
          break;
        case(2):
          feedbackMsg = 'Try again while I go get the paint.';
          break;
        case(3):
          feedbackMsg = 'Should I buy a dark blue, or a light blue that matches your nails?? Try again!';
          break;
        case(4):
          feedbackMsg = 'But Carmen, you\'re like a riddle master! You can do this!';
          break;
        case(5):
          feedbackMsg = 'I mean, there\'s only a few plausible answers. You could probably just guess till you get it.';
          break;
        case(6):
          feedbackMsg = 'Huh, I\'m kind of surprised you haven\'t gotten it after 6 guesses. Your brain must be damaged from finishing everyones drinks last night.';
          break;
        default:
          feedbackMsg = 'Okay, I\'m out of creative "wrong" messages, so you should probably just text me for a hint haha.';
      }

      this.setState({ feedbackMsg, numOfGuesses: this.state.numOfGuesses + 1})
    } else {
      this.props.toggleCorrectScreen(true, 'Happy birthday, Carmen! I hope your day is as badass as your present!')
    }
  }

  render(){
    const hiddenClass = (!this.state.feedbackMsg) ? 'hidden' : '';

    return (
      <div className='riddle-five'>
        <h2>Riddle #5</h2>
        <p>No tricks here, just straight Carmen-esque riddle-ism!</p>
        <div className='clue'>
          <p>Aleins abducted 100 mathematicians. Fuckin' Martians!
            The aliens will only let them survive if they are smart enough to escape
            the Room of Painted Foreheads.  With the lights off, each of the humans are painted
            on their forehead, some with blue paint and some with invisible paint. 
            They are then sent into a room, knowing only these three things:
          </p>
          <p>1. At least one person in the room has their forehead painted blue.</p>
          <p>2. Once you know for certain whether or not your head is painted blue, you may leave the room.</p>
          <p>3. All of the other humans are perfect logicians.</p>
          <p>The process works in rounds of lights-go-on (humans look), then lights-go-off (humans may leave)</p>
        </div>

        <p className={'feedback ' + hiddenClass}>{this.state.feedbackMsg}</p>
        
        <label htmlFor='riddle-five-input'>How many rounds before all the mathematicians are guaranteed to leave the room?</label>
        <input type='number' id='riddle-five-input' name='riddle-five-input'/>
        <div>
          <button onClick={() => this.handleGuess()}>Submit</button>
        </div>
      </div>
    )
  }
}