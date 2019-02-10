import React from 'react';

import '../stylesheets/CorrectLightBox.css';

export class CorrectLightBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render(){
    return (
      <div className='correct-light-box'>
        <div className='correct-light-box-content'>
          <h1>Correct!</h1>
          <p>{this.props.correctMsg}</p>
          <img src='https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif' alt='good job gif'/>
          <button onClick={() => this.props.toggleCorrectScreen(false)}>Next Question</button>
        </div>
      </div>
    )
  }
}