import React from 'react';

import goodJobGif from '../goodJob.gif';

import '../stylesheets/CorrectLightBox.css';

export class CorrectLightBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render(){
    let button = <button onClick={() => this.props.toggleCorrectScreen(false)}>{this.props.buttonMsg}</button>

    if (this.props.buttonMsg === 'See Present') {
      button = <a href='https://www.youtube.com/watch?v=fyfWRJz70DU'><button>{this.props.buttonMsg}</button></a>
    }

    return (
      <div className='correct-light-box'>
        <div className='correct-light-box-content'>
          <h1>Correct!</h1>
          <p>{this.props.correctMsg}</p>
          <img src={goodJobGif} alt='good job gif'/>
          {button}
        </div>
      </div>
    )
  }
}